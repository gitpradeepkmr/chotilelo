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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wppractice' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

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
define( 'AUTH_KEY',         'zw+ki.82^ML[Y9c.LCr=k 0N$Iz+Ft$5!../<jPt7mQ7NlsTpWHfd:e]1zF5sy8)' );
define( 'SECURE_AUTH_KEY',  'c6A/eeY:&hKJhnfehO96w=ExDXA7JTQxz<?x>;a{CL{#S8FgbK,OQ+7i}3DS87)u' );
define( 'LOGGED_IN_KEY',    '^Lz6,l%Sbh0e[gvp7*~f>:LRG}w>t+.WuZ:yA@x|SenXsqF$iBH^srvZKsyZ)8&C' );
define( 'NONCE_KEY',        '*!So-VGs;H3*q2CAZNNz@6u2]L(+=Z9G|?mzklSd;@dC=St}3`vpc`dIhv,Q=!.b' );
define( 'AUTH_SALT',        'xB)wS}Lu.WQ|e4?D 6b:3ai2e`wURqT]mOv>u[D,>rh37w8C4.IK>L~MVi9u^b=6' );
define( 'SECURE_AUTH_SALT', 'M[p8NL/y6(}os@F3bJf,<*N4wEC7zNz,z,4iCw39ZA$:5Lqa$|sw*j(LSAd-V1/[' );
define( 'LOGGED_IN_SALT',   'EI`&qj_(6-sCNPBGi&X<Dz p3qXn2s8cD1MP8=9 }*2d.)$Ql7<Jt-fgX)WF!.iD' );
define( 'NONCE_SALT',       'JNeq4j@7w`C!pgvUBRuK~e~=Q^X;D}]w{s)ty }+m]IY~4.?w0+aV`l0Tm!E3uZc' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wig_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
