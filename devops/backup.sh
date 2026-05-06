#!/bin/bash

DATE=$(date +%F-%H-%M)
BACKUP_DIR=/home/danush-soosai/UProject/db_backups

mkdir -p $BACKUP_DIR

/usr/bin/docker exec uproject-db-1 \
/usr/bin/mysqldump -u root -proot course_manager > $BACKUP_DIR/backup-$DATE.sql

echo "Backup completed: backup-$DATE.sql"