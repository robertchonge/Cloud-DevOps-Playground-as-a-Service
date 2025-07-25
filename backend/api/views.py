from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from . import deployer, monitor
from .models import DeploymentLog
from .serializers import DeploymentLogSerializer

class DeployInfrastructure(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        service = request.data.get('service')
        output = deployer.deploy(service)
        log = DeploymentLog.objects.create(service_name=service, status='deployed', output=output)
        return Response(DeploymentLogSerializer(log).data)

class MonitorResources(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response(monitor.status())
