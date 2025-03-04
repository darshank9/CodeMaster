from django.core.management.base import BaseCommand
from challenges.models import Challenge, Tag

class Command(BaseCommand):
    help = 'Add sample challenges to the database'

    def handle(self, *args, **kwargs):
        # Create tags if they don't exist
        tag1, _ = Tag.objects.get_or_create(name="Strings")
        tag2, _ = Tag.objects.get_or_create(name="Algorithms")
        tag3, _ = Tag.objects.get_or_create(name="Arrays")
        tag4, _ = Tag.objects.get_or_create(name="Math")

        # Create challenges
        challenges = [
            {
                "title": "Palindrome Checker",
                "description": "Create a function that checks if a string is a palindrome.",
                "difficulty": "Easy",
                "points": 100,
                "tags": [tag1, tag2]
            },
        ]

        for challenge_data in challenges:
            challenge = Challenge.objects.create(
                title=challenge_data["title"],
                description=challenge_data["description"],
                difficulty=challenge_data["difficulty"],
                points=challenge_data["points"],
                completed=0,
                status="not-started"
            )
            challenge.tags.set(challenge_data["tags"])

        self.stdout.write(self.style.SUCCESS('Successfully added 1 challenges'))