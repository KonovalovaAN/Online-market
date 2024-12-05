# test_user_service.py
import pytest
from .user_service import UserService

@pytest.fixture
def user_service():
    return UserService()

def test_register_user_success(user_service):
    user_service.register_user("test_user", "secure_password")
    assert "test_user" in user_service.users

def test_register_user_duplicate(user_service):
    user_service.register_user("test_user", "secure_password")
    with pytest.raises(ValueError, match="User already exists"):
        user_service.register_user("test_user", "another_password")

def test_register_user_empty_username(user_service):
    with pytest.raises(ValueError, match="Username and password cannot be empty"):
        user_service.register_user("", "secure_password")

def test_register_user_empty_password(user_service):
    with pytest.raises(ValueError, match="Username and password cannot be empty"):
        user_service.register_user("test_user", "")

def test_authenticate_user_success(user_service):
    user_service.register_user("test_user", "secure_password")
    result = user_service.authenticate_user("test_user", "secure_password")
    assert result is True

def test_authenticate_user_failure(user_service):
    user_service.register_user("test_user", "secure_password")
    result = user_service.authenticate_user("test_user", "wrong_password")
    assert result is False

def test_authenticate_user_nonexistent(user_service):
    result = user_service.authenticate_user("nonexistent_user", "password")
    assert result is False

def test_get_user_success(user_service):
    user_service.register_user("test_user", "secure_password")
    result = user_service.get_user("test_user")
    assert result == "test_user"

def test_get_user_not_found(user_service):
    with pytest.raises(ValueError, match="User not found"):
        user_service.get_user("nonexistent_user")
