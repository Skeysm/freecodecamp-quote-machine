from django.shortcuts import render
from rest_framework import viewsets
from .serializers import QuoteSerializer
from .models import Quote

# Create your views here.

class QuoteView(viewsets.ModelViewSet):
    serializer_class = QuoteSerializer
    queryset = Quote.objects.all()
