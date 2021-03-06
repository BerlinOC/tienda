"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from model.views import CarteraViewSet,ProductoViewSet,EjemplarViewSet,CategoriaViewSet,UserViewSet
from django.conf.urls import url
from rest_framework import routers
from model.views import CustomAuthToken
from django.conf import settings 
#from rest_framework.authtoken.views import ObtainAuthToken

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('cartera', CarteraViewSet)
router.register('categoria', CategoriaViewSet)
router.register('producto', ProductoViewSet)
router.register('ejemplar', EjemplarViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('admin',admin.site.urls),
    #url(r'admin', admin.site.urls),
    url('', include(router.urls)),

    #url(r'', include(router.urls)),
  #  url(r'^auth/',ObtainAuthToken.as_view())
  url(r'^auth/',CustomAuthToken.as_view())
]
if settings.DEBUG :
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)