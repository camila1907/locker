from django.shortcuts import render
from django.core.mail import send_mail


#def send_email(email):
 #   print(email)

# def index(request):
#    if request.method == 'POST':
#        email = request.POST.get('email')
#     send_email(data) 
#   email_body = 'hola CAMILA'

def index(request):
    if request.method == 'POST':
        send_mail(
            subject = 'That’s your subject'
            message = 'Idiotaaaaaaaaaaaaa funciona'
            from_email = ‘ignacio.valdesc@utem.cl’
            recipient_list = ['CorreoDePruebaLoginsa@gmail.com',]
            auth_user = 'Login'
            auth_password = 'loginsa12'
            fail_silently = False,
        )
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /    return render(request,'correo.html',{})
