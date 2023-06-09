/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'UserMember',
    {
      MBR_NO: {
        autoIncrement: true,
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        comment: '회원 번호',
      },
      MBR_ID: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: '회원 ID',
        unique: 'UX_USR_MBR_01',
      },
      MBR_PWD: {
        type: DataTypes.STRING(128),
        allowNull: true,
        comment: '회원 비밀번호',
      },
      MBR_NM: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: '회원 명',
      },
      MBR_CLS_CD: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      PWD_FAIL_CNT: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        comment: '비밀번호 실패 수',
      },
      EMAIL_ADDR: {
        type: DataTypes.STRING(200),
        allowNull: true,
        comment: 'EMAIL 주소',
      },
      COMP_USER_CLS_CD: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      COMP_CLS_CD: {
        type: DataTypes.STRING(4),
        allowNull: true,
      },
      EMP_DB_CFRM_YN: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        comment: '직원 DB 확인 여부',
      },
      MNGPR_YN: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        comment: '관리자 여부',
      },
      DEPT_NM: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: '부서 명',
      },
      PSTN_NM: {
        type: DataTypes.STRING(30),
        allowNull: true,
        comment: '직위 명',
      },
      COMP_NO: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        comment: '회사 번호',
      },
      USE_YN: {
        type: DataTypes.CHAR(1),
        allowNull: true,
        defaultValue: 'Y',
        comment: '사용 여부',
      },
      REG_DTM: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('current_timestamp'),
        comment: '등록 일시',
      },
      REGPR_ID: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: '등록자 ID',
      },
      UPD_DTM: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('current_timestamp'),
        comment: '수정 일시',
      },
      UPDPR_ID: {
        type: DataTypes.STRING(20),
        allowNull: true,
        comment: '수정자 ID',
      },
    },
    {
      sequelize,
      tableName: 'tb_usr_mbr',
    }
  );
};
