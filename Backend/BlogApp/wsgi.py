import os
from django.core.wsgi import get_wsgi_application # type: ignore

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'BlogApp.settings')
application = get_wsgi_application()
