#!/bin/sh

FILE=".npmrc"

/bin/cat <<EOM >$FILE
email=itsupport@vividseats.com
always-auth=true
_auth=$NPM_AUTH
EOM
