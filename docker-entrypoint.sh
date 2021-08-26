#!/bin/bash

expo login --non-interactive --username $EXPO_USERNAME --password $EXPO_PASSWORD

expo "$@"