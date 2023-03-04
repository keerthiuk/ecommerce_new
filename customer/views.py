from django.shortcuts import render

# Create your views here.
def cust_home(request):
    return render(request,'customer/home.html')
    
def cust_cart(request):
    return render(request,'customer/mycart.html')  

def cust_carts(request):
     return render(request,'customer/cart.html')         

def cust_product(request):
     return render(request,'customer/product_details.html')   

def cust_profit(request):
     return render(request,'customer/profit.html')         

def cust_change(request):
     return render(request,'customer/change.html')  
                 
def cust_css(request):
     return render(request,'customer/css.html')              
       
def cust_cssbox(request):
     return render(request,'customer/cssbox.html')              

def cust_csspro(request):
     return render(request,'customer/csspro.html')            

def cust_csspos(request):
     return render(request,'customer/position_relation.html')                 

def cust_csssticky(request):
     return render(request,'customer/positionsticky.html')

def cust_csssflexbox(request):
     return render(request,'customer/css_flexbox.html')                     

def cust_csssgrid(request):
     return render(request,'customer/cssgrid.html')        

def cust_csssgrid1(request):
     return render(request,'customer/cssgrid1.html') 

def cust_csssgrid2(request):
     return render(request,'customer/cssgrid2.html')       

def cust_bootstrap(request):
     return render(request,'customer/bootstrap.html')                                 

def cust_sample_bootstrap(request):
     return render(request,'customer/sample_bootstrap.html')   

def cust_grid_bootstrap(request):
     return render(request,'customer/grid_bootstrap.html')                                 


