#!/bin/bash

echo "Domain of the new user style: "

read DOMAIN

CONTENT_STYL=$(cat <<EOF
/* ==UserStyle==
@name           $DOMAIN
@version        1.0.0
@namespace      d.wolf.gdn
@preprocessor 	stylus
@description    Clean, minimalistic redesign.
@author		    David Wolf <d@wolf.gdn> (https://d.wolf.gdn)
@updateURL      https://raw.githubusercontent.com/devidw/user-styles/master/$DOMAIN/index.user.styl
@homepageURL	https://github.com/devidw/user-styles/tree/master/$DOMAIN
@supportURL		https://github.com/devidw/user-styles/issues
@license		Unlicense
==/UserStyle== */

@-moz-document domain("$DOMAIN")
EOF
)

CONTENT_README=$(cat <<EOF
= $DOMAIN
EOF
)

mkdir ./$DOMAIN

echo "$CONTENT_STYL" > ./$DOMAIN/index.user.styl

echo "$CONTENT_README" > ./$DOMAIN/README.adoc