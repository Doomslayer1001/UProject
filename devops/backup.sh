#!/bin/bash

DATE=$(date +%F-%H-%M)
BACKUP_DIR="/home/danush-soosai/UProject/db_backups"
CONTAINER_NAME="uproject-db-1"
DB_NAME="course_manager"
DB_USER="root"
DB_PASS="root"

mkdir -p "$BACKUP_DIR"

/usr/bin/docker exec "$CONTAINER_NAME" \
/usr/bin/mysqldump -u "$DB_USER" -p"$DB_PASS" "$DB_NAME" > "$BACKUP_DIR/backup-$DATE.sql"

if [ $? -eq 0 ]; then
    echo "Backup completed successfully: backup-$DATE.sql"
else
    echo "Backup failed!"
fi