# Sa iyong views.py
from django.shortcuts import render
from django.contrib import messages
from .models import Register


def helloworld (request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        register = Register(name=name, email=email, message=message)
        register.save()
        print("Panget mo")

    return render(request, 'helloworld.html',)
