export NODE_ENV = dev
export PATH := node_modules/.bin:$(PATH)
export SHELL := /bin/bash

all:
	react-scripts start

build:
	react-scripts build

test:
	react-scripts test --env=jsdom

eject:
	react-scripts eject
