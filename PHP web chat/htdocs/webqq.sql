-- phpMyAdmin SQL Dump
-- version 4.1.6
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2014-09-16 09:23:03
-- 服务器版本： 5.6.16
-- PHP Version: 5.5.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `webqq`
--

-- --------------------------------------------------------

--
-- 表的结构 `friendsinfo`
--

CREATE TABLE IF NOT EXISTS `friendsinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `friendid` int(11) NOT NULL,
  `friendNoteName` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `friendsinfo`
--

INSERT INTO `friendsinfo` (`id`, `userid`, `friendid`, `friendNoteName`) VALUES
(1, 1, 2, '阿汤哥'),
(2, 1, 3, '女神'),
(3, 1, 4, '皮帅哥'),
(4, 2, 1, 'Jim'),
(5, 2, 3, '苏大妈'),
(6, 1, 5, '三'),
(7, 2, 4, '张三'),
(8, 2, 5, '李四'),
(9, 3, 1, 'jack'),
(10, 3, 2, 'kha');

-- --------------------------------------------------------

--
-- 表的结构 `messagesinfo`
--

CREATE TABLE IF NOT EXISTS `messagesinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `msgContent` varchar(4000) NOT NULL,
  `msgSender` int(11) NOT NULL,
  `msgReceiver` int(11) NOT NULL,
  `msgSendTime` datetime NOT NULL,
  `msgState` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- 转存表中的数据 `messagesinfo`
--

INSERT INTO `messagesinfo` (`id`, `msgContent`, `msgSender`, `msgReceiver`, `msgSendTime`, `msgState`) VALUES
(2, 'hhhh', 2, 1, '2014-09-12 15:56:40', 'unread'),
(3, 'gv', 5, 1, '2014-09-12 16:04:02', 'unread'),
(4, '沈代笔', 3, 1, '2014-09-12 16:04:39', 'unread'),
(5, '沈代、、 ', 4, 1, '2014-09-12 16:05:21', 'unread'),
(6, 'who it is？', 1, 4, '2014-09-15 11:14:29', 'unread'),
(7, '1', 1, 5, '2014-09-16 14:08:00', 'unread');

-- --------------------------------------------------------

--
-- 表的结构 `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userpwd` varchar(20) NOT NULL,
  `userNickname` varchar(20) NOT NULL,
  `userHeadImage` varchar(300) NOT NULL,
  `userState` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `userinfo`
--

INSERT INTO `userinfo` (`id`, `userpwd`, `userNickname`, `userHeadImage`, `userState`) VALUES
(1, '123', 'Jim Green', 'headimages/2.png', 'offline'),
(2, '123', 'Tom Cruise', 'headimages/3.png', 'offline'),
(3, '123', 'Sophie Marceau', 'headimages/4.png', 'offline'),
(4, '123', 'Brad Pitt', 'headimages/5.png', 'offline'),
(5, '123', '张三', 'headimages/1.png', 'online');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
