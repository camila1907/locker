from rest_framework import routers
from.viewsets import LockerViewSet


router = routers.SimpleRouter()
router.register('Locker', LockerViewSet)


urlpatterns = router.urls
