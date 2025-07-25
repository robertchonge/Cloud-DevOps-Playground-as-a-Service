import subprocess

TEMPLATES = {
    'jenkins': 'templates/terraform/jenkins/',
    'kubernetes': 'templates/terraform/kubernetes/',
    'prometheus': 'templates/terraform/prometheus/',
}

def deploy(service):
    path = TEMPLATES.get(service)
    if not path:
        return f"Invalid service: {service}"
    try:
        subprocess.run(['terraform', 'init'], cwd=path, check=True)
        result = subprocess.run(['terraform', 'apply', '-auto-approve'], cwd=path, check=True, capture_output=True, text=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        return e.output
