# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models

class User(models.Model):
    username = models.CharField(max_length=150, unique=True)  # 아이디 필드
    password = models.CharField(max_length=128)  # 비밀번호 필드 (해싱되지 않음)
    name = models.CharField(max_length=50)  # 이름
    birth_date = models.DateField()  # 생년월일
    email = models.EmailField(unique=True)  # 이메일
    city = models.CharField(max_length=50)  # 시
    district = models.CharField(max_length=50)  # 군/구

    def __str__(self):
        return self.username
    
class SportsFacility(models.Model):
    facility_name = models.CharField(max_length=255, db_column='FCLTY_NM')  # 시설 이름
    facility_type = models.CharField(max_length=100, db_column='FCLTY_TY_NM')  # 시설 유형
    address = models.CharField(max_length=255, db_column='RDNMADR_ONE_NM')  # 도로명 주소
    phone_number = models.CharField(max_length=50, blank=True, null=True, db_column='FCLTY_TEL_NO')  # 전화번호 (선택적)
    city = models.CharField(max_length=50, db_column='CTPRVN_NM')  # 시/도
    district = models.CharField(max_length=50, db_column='SIGNGU_NM')  # 군/구

    class Meta:
        db_table = 'sports_facility'  # 데이터베이스에 저장될 테이블 이름

    def __str__(self):
        return self.facility_name

class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Clubs(models.Model):
    club_id = models.AutoField(db_column='CLUB_ID', primary_key=True)  # Field name made lowercase.
    club_nm = models.CharField(db_column='CLUB_NM', max_length=200)  # Field name made lowercase.
    ctprvn_nm = models.CharField(db_column='CTPRVN_NM', max_length=200)  # Field name made lowercase.
    signgu_nm = models.CharField(db_column='SIGNGU_NM', max_length=200)  # Field name made lowercase.
    item_nm = models.CharField(db_column='ITEM_NM', max_length=200)  # Field name made lowercase.
    afltion_group_nm = models.CharField(db_column='AFLTION_GROUP_NM', max_length=200)  # Field name made lowercase.
    item_cl_nm = models.CharField(db_column='ITEM_CL_NM', max_length=200)  # Field name made lowercase.
    sexdstn_flag_nm = models.CharField(db_column='SEXDSTN_FLAG_NM', max_length=200)  # Field name made lowercase.
    mber_co = models.DecimalField(db_column='MBER_CO', max_digits=28, decimal_places=5)  # Field name made lowercase.
    fond_de = models.DateField(db_column='FOND_DE')  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'clubs'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
