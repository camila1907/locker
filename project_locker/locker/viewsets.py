from rest_framework import viewsets
from.models import Locker
from.serializer import LockerSerializer



class LockerViewSet(viewsets.ModelViewSet):
    queryset = Locker.objects.all()
    serializer_class = LockerSerializer
