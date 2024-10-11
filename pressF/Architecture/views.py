from django.http import JsonResponse
from django.views import View
from .models import User
import json

class UserView(View):
    def get(self, request, *args, **kwargs):
        if kwargs.get('id'):
            try:
                user = User.objects.get(id=kwargs['id'])
                data = {'id': user.id, 'username': user.username, 'email': user.email}
                return JsonResponse(data, status=200)
            except User.DoesNotExist:
                return JsonResponse({'error': 'User not found'}, status=404)
        else:
            users = User.objects.all().values('id', 'username', 'email')
            return JsonResponse(list(users), safe=False, status=200)

    def post(self, request, *args, **kwargs):
        try:
            data = json.loads(request.body)
            new_user = User.objects.create(
                username=data.get('username'),
                email=data.get('email'),
                password=data.get('password')
            )
            response = {
                'id': new_user.id,
                'username': new_user.username,
                'email': new_user.email
            }
            return JsonResponse(response, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    def put(self, request, *args, **kwargs):
        try:
            user = User.objects.get(id=kwargs['id'])
            data = json.loads(request.body)
            user.username = data.get('username', user.username)
            user.email = data.get('email', user.email)
            user.save()
            response = {
                'id': user.id,
                'username': user.username,
                'email': user.email
            }
            return JsonResponse(response, status=200)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    def delete(self, request, *args, **kwargs):
        try:
            user = User.objects.get(id=kwargs['id'])
            user.delete()
            return JsonResponse({'message': 'User deleted successfully'}, status=200)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
