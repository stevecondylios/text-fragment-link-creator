#!/bin/bash

# This script converts the SVG icon to PNG files of different sizes
# Requires Inkscape or other SVG to PNG converter

# If you have ImageMagick installed:
# For 16x16 icon
convert -background none -resize 16x16 icon.svg icon16.png

# For 48x48 icon
convert -background none -resize 48x48 icon.svg icon48.png

# For 128x128 icon
convert -background none -resize 128x128 icon.svg icon128.png

# If you don't have ImageMagick, you can manually convert the SVG to PNG using 
# online converters or other tools like Inkscape

echo "Icons generated successfully!"