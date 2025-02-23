from django.db import models

class Challenge(models.Model):
    DIFFICULTY_CHOICES = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    ]
    
    STATUS_CHOICES = [
        ('started', 'Started'),
        ('not-started', 'Not Started'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField()
    difficulty = models.CharField(max_length=6, choices=DIFFICULTY_CHOICES)
    points = models.IntegerField()
    tags = models.ManyToManyField('Tag')
    completed = models.IntegerField(default=0)
    status = models.CharField(max_length=11, choices=STATUS_CHOICES, default='not-started')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name