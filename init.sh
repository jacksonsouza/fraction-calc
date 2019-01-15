#!/bin/bash

set -f
npm install
chmod +x bin/calc
sudo npm link
