from django.urls import path,include
from . import views




urlpatterns=[
    path('sellers_home',views.seller_home),
    path('add_product',views.add_product),
     path(' profit',views. profit),
      path('changeproduct',views.changeproduct),
]