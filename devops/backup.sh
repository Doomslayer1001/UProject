#!/bin/bash

DATE=$(date +%F-%H-%M)
BACKUP_DIR=~/db_backups

mkdir -p $BACKUP_DIR

docker exec uproject-db-1 \
mysqldump -u root -proot course_manager > $BACKUP_DIR/backup-$DATE.sql

echo "Backup completed: backup-$DATE.sql"
