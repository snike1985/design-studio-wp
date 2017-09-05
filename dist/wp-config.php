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
define('DB_NAME', 'websters_design-studio');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ' 2|={uC6H-Db/<1 %Ibt<X2gA&o+4X] 40N!bdul#YhVB/R?H}ccOx*4:(xs(@h*');
define('SECURE_AUTH_KEY',  'IusI_m3}j9l?Pm`K7eE4F4EiB y]EL2=12ys|dz*~4=~gj@s&_fEJ~!okK_n0N5g');
define('LOGGED_IN_KEY',    '`A9<.XOs{{KTispGggiARmqzbxFpRpy46VmD1u.>om%R.Z!`};vaRVA%mZq?ihJY');
define('NONCE_KEY',        'i.nc{z_G%GB$(G{7j;z4 >|V=E5>g:sEO@U)nj5C+}d<|u.TENTbKxYqY:F:oBjI');
define('AUTH_SALT',        '@Huow_7<0g(BQ~O@>!|)OhP,l3nDJjLQjba%|p;KTul(HX,a@aE5YBK+vVGMiP^7');
define('SECURE_AUTH_SALT', ',.@y=Bh4x#50R2>#4u?J5c?DOxvrY8he3RpA%>@&heN|.P$2s#j&7 +oYDGn3.MU');
define('LOGGED_IN_SALT',   'm&_ ?}Qy vG6H(;*K%M660$YG{Tl3]_.,4UN?zG_%eYZj.RkoSP0u/:j}[$/%#tw');
define('NONCE_SALT',       '|s[oEC}{qWh,G!3K~=$6=x<#ds0cU*-0tQ&HOxN[3Uj7~&ZF6vx1k+!)gu7aL-_f');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
