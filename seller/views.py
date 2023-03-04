from django.shortcuts import render

# Create your views here.

def seller_home(request):
    return render(request,'seller/home.html')



def add_product(request):
    return render(request,'seller/add_product.html')



def profit(request):
    return render(request,'seller/profit.html')


def changeproduct(request):
    return render(request,'seller/change_product.html')


