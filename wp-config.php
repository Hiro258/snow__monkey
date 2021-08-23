<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '_xWn(;7X0j`+zRv@K6r*V)0d[MJ(5lJqVd4C@XA3fZ/cQiVy}UE;!M;O*Q?0,Fin' );
define( 'SECURE_AUTH_KEY',  'c0^#o1GN)nqO??zo$A<ovQBF#sQr5(I*y]9xkG%}[swDd#dL?khorRh-h2t}WZ,c' );
define( 'LOGGED_IN_KEY',    ':4p3#Nim2nO)JO(+(.IolzL~e=uzr:xre)Aj[&t|=z;wRA1y20!^9cdSCO&ZJ2h7' );
define( 'NONCE_KEY',        '<u#% [8s%+zMgmlFSGNpbbq$73ab^6V7~)ejV]7[;zb~1Om(Fibsw 0ODUtpK48]' );
define( 'AUTH_SALT',        'YcOl4GCF4)HZ51^dR:oUeS]qm7]]3M#1w%.@hwuy/^LjkW;TDeFrYg5dB(Gj02Rw' );
define( 'SECURE_AUTH_SALT', 'GuctE7ib#ckAZJ%:hak3%MfuJD?ZQq&DE8:C/)P$rK6c@PK.Zd9z@}B /U5Kz8+v' );
define( 'LOGGED_IN_SALT',   'VnQ(&_v{U$?AXyscHx_Q:GtBVj|)OPs6b13`1`+}2l_{ y42]NHSta{I}7pT_l+{' );
define( 'NONCE_SALT',       'SUn1fFu&-Z4qDvk(^tC.@?PtP!*-3al~0@a:Lo[nwXQr3Jd_69*> grt?S,m<|It' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpcorp01_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
