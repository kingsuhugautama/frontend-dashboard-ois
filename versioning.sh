#!/usr/bin/env bash
BUILD_DATE=$(sed -n 's/^BUILD_DATE=\(.*\)/\1/p' < /var/jenkins_home/envstore/frontend_his.env)
DATE_NOW=$(date +%d%m%Y)

if [ $BUILD_DATE != $DATE_NOW ];
then
    sed -i "s/^BUILD_VERSION\=.*/BUILD_VERSION=0/" /var/jenkins_home/envstore/frontend_his.env
    echo "build number reset success"
fi

BUILD_VERSION=$(sed -n 's/^BUILD_VERSION=\(.*\)/\1/p' < /var/jenkins_home/envstore/frontend_his.env)
NEXT_VERSION=$((BUILD_VERSION+1))

sed -i "s/^BUILD_DATE\=.*/BUILD_DATE=$DATE_NOW/" /var/jenkins_home/envstore/frontend_his.env
sed -i "s/^BUILD_VERSION\=.*/BUILD_VERSION=$NEXT_VERSION/" /var/jenkins_home/envstore/frontend_his.env

echo "version updated to : $(date +%d%m%Y).$NEXT_VERSION"

# author : Andre Kurniawan
# email  : andrekurniawan@gmail.com
# increment build version on .env file and get date now in format(dd-MM-YYYY)




