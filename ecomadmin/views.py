from django.shortcuts import render

# Create your views here.


def admin_home(request):
    return render(request,'ecomadmin/home.html')



def approve_sell(request):
    return render(request,'ecomadmin/approve_seller.html')

