import logging
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.test import TestCase
from django.contrib.auth.models import User


#CRUD operations
# Create user
def create_user(request):
    user = User.objects.create_user(username='newuser', email='user@example.com', password='password123')
    return JsonResponse({'user_id': user.id})

# Read user
def get_user(request, user_id):
    user = User.objects.get(pk=user_id)
    return JsonResponse({'username': user.username, 'email': user.email})

# Update user
def update_user(request, user_id):
    user = User.objects.get(pk=user_id)
    user.email = 'newemail@example.com'
    user.save()
    return JsonResponse({'message': 'User updated'})

# Delete user
def delete_user(request, user_id):
    user = User.objects.get(pk=user_id)
    user.delete()
    return JsonResponse({'message': 'User deleted'})

#logging
logger = logging.getLogger(__name__)

def create_user(request):
    try:
        user = User.objects.create_user(username='newuser', email='user@example.com', password='password123')
        logger.info(f'User created with ID: {user.id}')
        return JsonResponse({'user_id': user.id})
    except Exception as e:
        logger.error(f'Error creating user: {e}')
        return JsonResponse({'error': 'User creation failed'})

#testing
class UserTestCase(TestCase):
    def test_create_user(self):
        user = User.objects.create_user(username='testuser', email='test@example.com', password='password123')
        self.assertEqual(user.username, 'testuser')
        self.assertEqual(user.email, 'test@example.com')

    def test_update_user(self):
        user = User.objects.create_user(username='testuser', email='test@example.com', password='password123')
        user.email = 'newemail@example.com'
        user.save()
        self.assertEqual(user.email, 'newemail@example.com')

    def test_delete_user(self):
        user = User.objects.create_user(username='testuser', email='test@example.com', password='password123')
        user_id = user.id
        user.delete()
        self.assertFalse(User.objects.filter(id=user_id).exists())
