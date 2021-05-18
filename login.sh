#!/bin/sh

FILE=".npmrc"

/bin/cat <<EOM >$FILE
username=vsadmin
always-auth=true
_auth=$NPM_AUTH
EOM
