from django.shortcuts import render, redirect
from django.http import HttpResponse
from .chat_management import load_users, save_user, save_message, load_messages, load_chat


def register_view(request):
    users = load_users()
    """Обрабатывает регистрацию пользователя."""
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        confirm_password = request.POST['confirm_password']

        if username in users:
            return render(request, 'register.html', {'error': 'Username already exists.'})

        if password != confirm_password:
            return render(request, 'register.html', {'error': 'Passwords do not match.'})

        save_user(username, password)
        return redirect('login')

    return render(request, 'register.html')

def login_view(request):
    users = load_users()
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        if username in users and users[username] == password:
            return redirect('chat', username=username)
        return render(request, 'login.html', context={'error': 'Invalid username or password.'})
    return render(request, 'login.html')

def chat_view(request, username):
    """Обрабатывает логику чата."""
    users = load_users()

    if username not in users:
        return redirect('login')

    recipient = None
    messages = []
    error = None

    if request.method == 'POST':
        if 'search_user' in request.POST:
            recipient = request.POST['search_user']
            if recipient not in users:
                error = f"User '{recipient}' does not exist."
                recipient = None
            else:
                messages = load_chat(username, recipient)

        elif 'message' in request.POST:
            message = request.POST['message']
            recipient = request.POST.get('recipient')
            if recipient and recipient in users:
                save_message(username, recipient, message)
                messages = load_chat(username, recipient)
            else:
                error = "Error: Could not send message. Recipient not found."

    return render(request, 'chat.html', {
        'username': username,
        'recipient': recipient,
        'messages': messages,
        'error': error
    })
