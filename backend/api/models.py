from django.db import models

class DeploymentLog(models.Model):
    timestamp = models.DateTimeField(auto_now_add=True)
    service_name = models.CharField(max_length=100)
    status = models.CharField(max_length=50)
    output = models.TextField()
