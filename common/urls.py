from django.urls import path
from . import views


app_name = 'common' # for redirection purpose

urlpatterns=[
    
    path('',views.home,name='home'),
    path('common_admin',views.admin, name='admin_login'),
    path('common_custlog',views.customer_login ,name='customer_login'),
    path('common_custsig',views.customer_signup, name='customer_signup'),
    path('common_sellerlog',views.seller_login,name='seller_login'),
    path('common_sellersig',views.seller_signup,name='seller_signup'),
    path('conditions_loop',views.conditions_loop,name='conditions_loop'),
    path('dom',views.dom,name='dom'),
    
]