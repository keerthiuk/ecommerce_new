from django.shortcuts import render

# Create your views here.


def admin(request):
    return render(request,'common/admin_login.html')
    
def customer_login(request):
    return render(request,'common/customer_login.html')  

def customer_signup(request):
     return render(request,'common/customer_signup.html')         

def home(request):
     return render(request,'common/projecthome.html')   

def seller_login(request):
     return render(request,'common/sellerlog.html')         

def seller_signup(request):
     return render(request,'common/sellersig.html')              