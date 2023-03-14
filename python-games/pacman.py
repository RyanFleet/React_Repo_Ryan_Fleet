import pygame
import random

# Initialize Pygame
pygame.init()

# Set up game display
screen_width = 600
screen_height = 800
screen = pygame.display.set_mode((screen_width, screen_height))
pygame.display.set_caption("Pacman")

# Set up game variables
score = 0
lives = 3
game_font = pygame.font.Font(None, 50)

# Load images
pacman_img = pygame.image.load("pacman.png")
ghost_img = pygame.image.load("ghost.png")
dot_img = pygame.image.load("dot.png")
powerup_img = pygame.image.load("powerup.png")

# Create Pacman class
class Pacman:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.speed = 5
        self.direction = "RIGHT"
    
    def move(self):
        if self.direction == "RIGHT":
            self.x += self.speed
        elif self.direction == "LEFT":
            self.x -= self.speed
        elif self.direction == "UP":
            self.y -= self.speed
        elif self.direction == "DOWN":
            self.y += self.speed
    
    def draw(self):
        screen.blit(pacman_img, (self.x, self.y))

# Create Ghost class
class Ghost:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.speed = 3
    
    def move(self):
        # Add AI code to make the ghost chase Pacman
        pass
    
    def draw(self):
        screen.blit(ghost_img, (self.x, self.y))

# Create Dot class
class Dot:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def draw(self):
        screen.blit(dot_img, (self.x, self.y))

# Create Powerup class
class Powerup:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def draw(self):
        screen.blit(powerup_img, (self.x, self.y))

# Create game objects
pacman = Pacman(300, 400)
ghost = Ghost(100, 100)
dots = [Dot(50, 50), Dot(100, 100), Dot(150, 150)]
powerups = [Powerup(200, 200)]

# Game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_RIGHT:
                pacman.direction = "RIGHT"
            elif event.key == pygame.K_LEFT:
                pacman.direction = "LEFT"
            elif event.key == pygame.K_UP:
                pacman.direction = "UP"
            elif event.key == pygame.K_DOWN:
                pacman.direction = "DOWN"
    
    # Update game state
    pacman.move()
    ghost.move()
    
    # Check for collisions
    for dot in dots:
        if pygame.Rect(pacman.x, pacman.y, 32, 32).colliderect(pygame.Rect(dot.x, dot.y, 16, 16)):
            score += 10
            dots.remove(dot)
    for powerup in powerups:
        if pygame.Rect(pacman.x, pacman.y, 32, 32).colliderect(pygame.Rect(powerup.x, powerup.y, 32, 32)):
            score += 50
