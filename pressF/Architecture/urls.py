from django.http import JsonResponse
from django.views import View
from .models import User

class UserView(View):
    def get(self, request, *args, **kwargs):
        users = User.objects.all().values('id', 'username', 'email')
        return JsonResponse(list(users), safe=False)

    def post(self, request, *args, **kwargs):
        new_user = User.objects.create(
            username=request.POST.get('username'),
            email=request.POST.get('email'),
            password=request.POST.get('password')
        )
        return JsonResponse({'id': new_user.id, 'username': new_user.username})

    def put(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs.get('id'))
        user.username = request.PUT.get('username', user.username)
        user.email = request.PUT.get('email', user.email)
        user.save()
        return JsonResponse({'message': 'User updated successfully'})

    def delete(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs.get('id'))
        user.delete()
        return JsonResponse({'message': 'User deleted successfully'})
