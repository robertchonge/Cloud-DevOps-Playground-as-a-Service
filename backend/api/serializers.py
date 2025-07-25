from rest_framework import serializers
from .models import DeploymentLog

class DeploymentLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeploymentLog
        fields = '__all__'
