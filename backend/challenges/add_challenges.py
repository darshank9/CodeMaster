from django.core.management.base import BaseCommand
from your_app.models import Challenge, Tag

class Command(BaseCommand):
    help = 'Add sample challenges to the database'

    def handle(self, *args, **kwargs):
        # Create tags if they don't exist
        tag1, _ = Tag.objects.get_or_create(name="Strings")
        tag2, _ = Tag.objects.get_or_create(name="Algorithms")

        # Create challenges
        Challenge.objects.create(
            title="Palindrome Checker",
            description="Create a function that checks if a string is a palindrome.",
            difficulty="Easy",
            points=100,
            completed=0,
            status="not-started"
        ).tags.set([tag1, tag2])

        self.stdout.write(self.style.SUCCESS('Successfully added challenges'))