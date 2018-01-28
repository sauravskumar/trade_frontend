#!/bin/bash
cd flask_app
FLASK_APP=main.py FLASK_DEBUG=1 python -m flask run
echo $! > .pidfile
