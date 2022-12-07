USE [YourPlace]
GO

set identity_insert [User] on
insert into [User] ([Id], [firstName], [lastName], [photoUrl], [email]) 
VALUES (1, 'Ad', 'Min', 'https://iso.500px.com/wp-content/uploads/2015/03/business_cover.jpeg', 'admin@example.com'),
(2, 'Foo', 'Bar', 'https://www.pexels.com/photo/man-in-brown-coat-and-gray-backpack-posing-for-a-photo-837358/', 'foo@bar.com'),
(3, 'Jacob', 'Jude', 'https://www.shutterstock.com/image-photo/smiling-young-middle-eastern-man-digital-2063524544', 'jacob@jude.com'),
(4, 'Mary', 'Smith', 'https://picsum.photos/200', 'eve@smith.com'),
(5, 'Christian', 'Pulisic', 'https://picsum.photos/200', 'captain@america.com'),
(6, 'Clifford', 'Thedog', 'https://picsum.photos/200', 'big@red.com'),
(7, 'Frank', 'Reynolds', 'https://picsum.photos/200', 'paddys@pub.com'),
(8, 'Walter', 'White', 'https://picsum.photos/200', 'thecook@theonewhoknocks.com'),
(9, 'Robert', 'Brunner', 'https://picsum.photos/200', 'anarchist@owl.com');
set identity_insert [User] off

set identity_insert [Friends] on
insert into [Friends] ([Id], [userProfileIdSender], [userProfileIdReceive])
VALUES (1, 1, 2), (2, 2, 3), (3,1,3), (4,1,4),(5,1,5),(6,1,6),(7,1,7),(8,1,8),(9,1,9);
set identity_insert [Friends] off

set identity_insert [Bulletins] on
insert into [Bulletins] ([Id], [userProfileId], [subject], [content])
VALUES (1, 1, 'I really love dogs', 'I just really really really love dogs, you know?'),
(2, 2, 'You know what I am really tired of?', 'People who are unable to put their carts back in the correct spot after grocery shopping'),
(3, 2, 'Open or have bad luck for 24 hrs', 'Repost or your mom will stop loving you'),
(4, 3, 'PaRtY aT mY pLaCe', '1234 Nowhere Rd, Huntington, WV');
set identity_insert [Bulletins] off

set identity_insert [Status] on
insert into [Status] ([Id], [userProfileId], [content])
VALUES (1,1,'Hey I really love this app!'),
(2,1,'Is anyone else having as much fun as I am??'),
(3,2, 'A new social media site? Lame.'),
(4,2, 'Someone should buy this site and run it into the ground'),
(5,3, 'Hey... I am trying my best');
set identity_insert [Status] off

set identity_insert [BulletinComments] on
insert into [BulletinComments] ([Id], [postId], [userProfileId], [content])
VALUES (1, 1, 2, 'What a lame post. No one cares'), 
(2, 1, 3, 'I also love dogs!'),
(3, 2, 1, 'Yeah! Those people suck!'),
(4, 2, 3, 'Those people should not be allowed to grocery shop!'),
(5, 3, 1, 'NOOO! I fell for it again!');
set identity_insert [BulletinComments] off

set identity_insert [StatusComments] on
insert into [StatusComments] ([Id], [statusId], [userProfileId], [content])
VALUES (1,1,2, 'Hey! Me too!'),
(2,1,3, 'Thank you!'),
(3,1,1, 'I am also having fun!');
set identity_insert [StatusComments] off

set identity_insert [Ranking] on
insert into [Ranking] ([Id], [rank])
VALUES (1,1), (2,2), (3,3), (4,4), (5,5), (6,6), (7,7), (8,8);
set identity_insert [Ranking] off

set identity_insert [Top8Friends] on
insert into [Top8Friends] ([Id], [FriendId], [RankingId], [userId])
VALUES (1, 1, 1, 1), (2, 3, 2, 1), (3, 4, 3, 1), (4, 5, 4, 1), (5,6,5,1), (6,7,6,1), (7,8,7,1), (8,9,8,1);
set identity_insert [Top8Friends] off

set identity_insert [Messages] on
insert into [Messages] ([Id], [userId], [friendId], [Subject], [content])
VALUES (1, 1, 2, 'Test message', 'I just wanna see if these messages work');
set identity_insert [Messages] off
