from django.contrib import admin
from .models import Challenge, Tag

@admin.register(Challenge)
class ChallengeAdmin(admin.ModelAdmin):
    list_display = ['title', 'difficulty', 'points', 'status']
    filter_horizontal = ['tags']  # For easier tag selection

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['name']