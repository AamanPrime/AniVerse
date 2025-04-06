-- ====================================================
-- sample_data.sql
-- This file contains INSERT statements to populate all tables
-- with realistic sample data
-- ====================================================

-- Sample data for Animes table

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '18f1be5e-314c-4b7f-842a-dd4cd89996e7', 'Solo Leveling -ReAwakening-', '2024-11-26', 'Over a decade after ''gates'' connecting worlds appeared, awakening ''hunters'' with superpowers, weakest hunter Sung Jinwoo encounters a double dungeon and accepts a mysterious quest, becoming the only one able to level up, changing his fate. A catch-up recap of the first season coupled with an exclusive sneak peek of the first two episodes of the highly anticipated second season in one momentous theatrical fan experience.', 1,
    1, 'Unknown Studio', 6.9, 'https://image.tmdb.org/t/p/w500/dblIFen0bNZAq8icJXHwrjfymDW.jpg', NULL,
    '[{"name": "Taito Ban"}, {"name": "Genta Nakamura"}, {"name": "Haruna Mikawa"}, {"name": "Reina Ueda"}, {"name": "Daisuke Hirakawa"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 16, "name": "Animation"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'f356811a-b70b-44d3-a316-41e99fa826eb', 'OVERLORD: The Sacred Kingdom', '2024-09-20', 'After twelve years of playing his favorite MMORPG game, Momonga logs in for the last time only to find himself transported into its world playing it indefinitely. Throughout his adventures, his avatar ascends to the title of Sorcerer King Ains Ooal Gown. Once prosperous but now on the brink of ruin, The Sacred Kingdom enjoyed years of peace after construction of an enormous wall protecting them from neighboring invasions. But, one day this comes to an end when the Demon Emperor Jaldabaoth arrives with an army of villainous demi-humans. Fearing invasion of their own lands, the neighboring territory of the Slane Theocracy is forced to beg their enemies at the Sorcerer Kingdom for help. Heeding the call, Momonga, now known as the Sorcerer King Ains Ooal Gown, rallies the Sorcerer Kingdom and its undead army to join the fight alongside the Sacred Kingdom and the Slane Theocracy in hopes to defeat the Demon Emperor.', 1,
    1, 'Unknown Studio', 7.3, 'https://image.tmdb.org/t/p/w500/jEvytxNa5mfW7VAUmDWsZtIdATc.jpg', NULL,
    '[{"name": "Satoshi Hino"}, {"name": "Yoshino Aoyama"}, {"name": "Hitomi Nabatame"}, {"name": "Saori Hayami"}, {"name": "Haruka Tomatsu"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 16, "name": "Animation"}, {"id": 14, "name": "Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'f918aa22-0edb-41d3-ba9f-81aa15d01c60', 'Attack on Titan: THE LAST ATTACK', '2024-11-08', 'A colossal-sized omnibus film bringing together the last two episodes of Attack on Titan in the franchise''s first-ever theatrical experience. After venturing beyond the walls and separated from his comrades, Eren finds himself inspired by this new truth and plots the "Rumbling," a terrifying plan to eradicate every living thing in the world. With the fate of the world hanging in the balance, a motley crew of Eren''s former comrades and enemies scramble to halt his deadly mission. The only question is, can they stop him?', 1,
    1, 'Unknown Studio', 8.5, 'https://image.tmdb.org/t/p/w500/aH0N5FnQsU38FJojQus8MUnGm0f.jpg', NULL,
    '[{"name": "Yuki Kaji"}, {"name": "Yui Ishikawa"}, {"name": "Marina Inoue"}, {"name": "Hiroshi Kamiya"}, {"name": "Yu Shimamura"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '3e7ca82d-c775-40e1-b7ca-95d07c7d00cf', 'Spirited Away', '2001-07-20', 'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.', 1,
    1, 'Unknown Studio', 8.537, 'https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg', NULL,
    '[{"name": "Rumi Hiiragi"}, {"name": "Miyu Irino"}, {"name": "Mari Natsuki"}, {"name": "Takashi Naito"}, {"name": "Yasuko Sawaguchi"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10751, "name": "Family"}, {"id": 14, "name": "Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'c9ca0aa3-cae8-4030-b2e5-566bf677bdc6', 'Howl''s Moving Castle', '2004-09-09', 'Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.', 1,
    1, 'Unknown Studio', 8.397, 'https://image.tmdb.org/t/p/w500/23hUJh7JdO23SpgUB5oiFDQk2wX.jpg', NULL,
    '[{"name": "Chieko Baisho"}, {"name": "Takuya Kimura"}, {"name": "Akihiro Miwa"}, {"name": "Tatsuya Gashūin"}, {"name": "Ryunosuke Kamiki"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 14, "name": "Fantasy"}, {"id": 16, "name": "Animation"}, {"id": 12, "name": "Adventure"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '44b875fd-557b-41d9-8d2f-b8393c981dd2', 'My Neighbor Totoro', '1988-04-16', 'Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.', 1,
    1, 'Unknown Studio', 8.07, 'https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg', NULL,
    '[{"name": "Noriko Hidaka"}, {"name": "Chika Sakamoto"}, {"name": "Hitoshi Takagi"}, {"name": "Shigesato Itoi"}, {"name": "Sumi Shimamoto"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 14, "name": "Fantasy"}, {"id": 16, "name": "Animation"}, {"id": 10751, "name": "Family"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'a07509b8-b023-4dfc-9f51-df38ac659570', 'Your Name.', '2016-08-26', 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki''s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.', 1,
    1, 'Unknown Studio', 8.484, 'https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg', NULL,
    '[{"name": "Ryunosuke Kamiki"}, {"name": "Mone Kamishiraishi"}, {"name": "Ryo Narita"}, {"name": "Aoi Yuki"}, {"name": "Nobunaga Shimazaki"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10749, "name": "Romance"}, {"id": 18, "name": "Drama"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '2c849873-23b3-4480-a5ae-a002b4533db1', 'Feast of the Fallen Angels', '1985-03-10', 'Datenshi-tachi no Kyōen is an OAV (1985) where the younger sister of a family (who gets in way over their heads) ends up owing the yakuza money. Because she can''t pay, she is taken by the gang members to be used as a sexual toy. Then she vows to take gruesome revenge upon her perpetrators.', 1,
    1, 'Unknown Studio', 0.0, 'https://image.tmdb.org/t/p/w500/9KghGn1E1zwphKcKlTVfOhidKjj.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10770, "name": "TV Movie"}, {"id": 27, "name": "Horror"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'fc2ce516-1bb7-47e2-9c8e-aac44670a2fd', 'The Boy and the Heron', '2023-07-14', 'While the Second World War rages, the teenage Mahito, haunted by his mother''s tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy''s mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the "long-awaited one."', 1,
    1, 'Unknown Studio', 7.5, 'https://image.tmdb.org/t/p/w500/f4oZTcfGrVTXKTWg157AwikXqmP.jpg', NULL,
    '[{"name": "Soma Santoki"}, {"name": "Masaki Suda"}, {"name": "Ko Shibasaki"}, {"name": "Aimyon"}, {"name": "Yoshino Kimura"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 10751, "name": "Family"}, {"id": 18, "name": "Drama"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'f6843411-8fb5-4284-b84e-097871c90c18', 'My Hero Academia: You''re Next', '2024-08-02', 'In a society devastated by the effects of an all-out war between heroes and villains, a mysterious giant fortress suddenly appears, engulfing towns and people one after another. Then, a man reminiscent of All Might, the ''symbol of peace'', stands in front of Izuku and his friends...', 1,
    1, 'Unknown Studio', 6.856, 'https://image.tmdb.org/t/p/w500/8rdB1wkheEMMqcY8qLAKjCMPcnZ.jpg', NULL,
    '[{"name": "Daiki Yamashita"}, {"name": "Meru Nukumi"}, {"name": "Mamoru Miyano"}, {"name": "Kenta Miyake"}, {"name": "Nobuhiko Okamoto"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 28, "name": "Action"}, {"id": 12, "name": "Adventure"}, {"id": 878, "name": "Science Fiction"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '24d89ae0-cd37-4dea-900b-86f714ee5320', 'Princess Mononoke', '1997-07-12', 'Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.', 1,
    1, 'Unknown Studio', 8.333, 'https://image.tmdb.org/t/p/w500/cMYCDADoLKLbB83g4WnJegaZimC.jpg', NULL,
    '[{"name": "Yoji Matsuda"}, {"name": "Yuriko Ishida"}, {"name": "Yuko Tanaka"}, {"name": "Kaoru Kobayashi"}, {"name": "Masahiko Nishimura"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 12, "name": "Adventure"}, {"id": 14, "name": "Fantasy"}, {"id": 16, "name": "Animation"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'f64512da-7e7b-41b9-b47b-bfcded7515b0', 'Delinquent in Drag', '1992-08-21', 'Does being the only guy in an all girl school sound like paradise? It might be, if the girls knew you were a guy, but to stay in school teenage pervert Banji can''t let anyone find out his chromosomes don''t match. Banji''s status conscious parents want him to go to a good school, but not enough to spend the money on a good co-ed school. Now, in addition to studying math and science, Banji has to learn how to put on a bra and makeup. His life has become a living hell. Not only is he at the bottom of the social pecking order, he must also conceal his inner-masculinity from the pretty classmate girl who''s stolen his heart while avoiding the female bullies who threaten to expose his less-than-feminine charms in the locker room.', 1,
    1, 'Unknown Studio', 5.4, 'https://image.tmdb.org/t/p/w500/rWEykM1thLhYee6mK25fGLXyO14.jpg', NULL,
    '[{"name": "Kappei Yamaguchi"}, {"name": "Hideyuki Tanaka"}, {"name": "Reiko Oimori"}, {"name": "Yumi Touma"}, {"name": "Eiko Yamada"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 28, "name": "Action"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'cfc1ca35-4fa3-49ca-bbc4-35b8c5af36cd', 'Ghost in the Shell: S.A.C. 2nd GIG - Individual Eleven', '2006-01-27', 'The year is 2030. Six months passed since the Laughing Man Incident was solved. About 3 million refugees are living in Japan, invited to fill the labor shortage. However, the emergent presence of the invited-refugees intensified their confrontation with the "Individualists", who called for national isolation, which then led to the increased incidences of terrorist attacks. Under these circumstances, a terrorist group called the Individual Eleven carries out a suicide attack. But there was a greater scheme behind their action. When Section 9 learns this, they attempt to nail down the mastermind of the incident. Meanwhile, Kuze, a surviving member of the Individual Eleven, becomes a charismatic leader of the invited-refugees and intensifies the confrontation against the government. And Motoko starts feeling a strange sense of fate connecting her with Kuze...', 1,
    1, 'Unknown Studio', 7.6, 'https://image.tmdb.org/t/p/w500/r0vvm9t7lGTEerapmIe9GAcCDZc.jpg', NULL,
    '[{"name": "Atsuko Tanaka"}, {"name": "Osamu Saka"}, {"name": "Koichi Yamadera"}, {"name": "Rikiya Koyama"}, {"name": "Takashi Onozuka"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 878, "name": "Science Fiction"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '8e5cb75e-d25a-4bac-99a1-dfec4d5912fe', 'Ghost in the Shell', '1995-11-18', 'In the year 2029, the barriers of our world have been broken down by the net and by cybernetics, but this brings new vulnerability to humans in the form of brain-hacking. When a highly-wanted hacker known as ''The Puppetmaster'' begins involving them in politics, Section 9, a group of cybernetically enhanced cops, are called in to investigate and stop the Puppetmaster.', 1,
    1, 'Unknown Studio', 7.9, 'https://image.tmdb.org/t/p/w500/9gC88zYUBARRSThcG93MvW14sqx.jpg', NULL,
    '[{"name": "Atsuko Tanaka"}, {"name": "Akio Otsuka"}, {"name": "Iemasa Kayumi"}, {"name": "Koichi Yamadera"}, {"name": "Yutaka Nakano"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 28, "name": "Action"}, {"id": 16, "name": "Animation"}, {"id": 878, "name": "Science Fiction"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '2b11c86f-65ad-417d-8ba4-6cfab56e4598', 'BLUE LOCK THE MOVIE -EPISODE NAGI-', '2024-04-19', 'When apathetic gamer Nagi agrees to join his rich classmate Mikage in soccer, their partnership leads to the famous Blue Lock program — and to changes.', 1,
    1, 'Unknown Studio', 7.4, 'https://image.tmdb.org/t/p/w500/ae434jM5NG2kKX1rRkG5giMhpPI.jpg', NULL,
    '[{"name": "Nobunaga Shimazaki"}, {"name": "Yuma Uchida"}, {"name": "Kazuyuki Okitsu"}, {"name": "Kazuki Ura"}, {"name": "Tasuku Kaito"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 28, "name": "Action"}, {"id": 18, "name": "Drama"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '2ae2cd09-74fb-4026-8f53-15f925866fdd', 'Given the Movie: To the Sea', '2024-09-20', 'Second part of Given Movie: Hiiragi Mix.', 1,
    1, 'Unknown Studio', 10.0, 'https://image.tmdb.org/t/p/w500/qUentZw7lvaRVbf2MRHVW8y1la8.jpg', NULL,
    '[{"name": "Shogo Yano"}, {"name": "Yuma Uchida"}, {"name": "Masatomo Nakazawa"}, {"name": "Takuya Eguchi"}, {"name": "Fumiya Imai"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10749, "name": "Romance"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '21902689-d209-43e5-8fa2-fbe4eb73280d', 'Mushi-Shi: The Shadow That Devours the Sun', '2014-01-03', 'A strange shadow forms blocking the sun from a village following a solar eclipse. Ginko enlists the help of the villagers to solve the mystery of the shadow before it destroys their crops.', 1,
    1, 'Unknown Studio', 9.0, 'https://image.tmdb.org/t/p/w500/mCdT4GCPLDvgc1WNZDM3HKboAqg.jpg', NULL,
    '[{"name": "Yuto Nakano"}, {"name": "Yuna Watanabe"}, {"name": "Rio Sasaki"}, {"name": "Mika Doi"}, {"name": "Yuji Ueda"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 14, "name": "Fantasy"}, {"id": 9648, "name": "Mystery"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '866bb671-edbb-4ed3-b704-b83c3279050e', 'Fruits Basket -prelude-', '2022-02-18', 'Kyoko, who couldn''t believe anything in the world and lived a desolate life, meets Katsuya Honda, who has been assigned as an educational trainee. She is at the mercy of Katsuya, who is rude and has a strong habit, and she is gradually attracted to her. However, she is disowned by her parents in the wake of an incident with her bad fellow. It''s a punishment that I''ve been doing as much as I like. Katsuya appears in front of Kyoko who thinks so...', 1,
    1, 'Unknown Studio', 7.0, 'https://image.tmdb.org/t/p/w500/gt7radvJj8UI8C8mvmtWX5uiqQB.jpg', NULL,
    '[{"name": "Manaka Iwami"}, {"name": "Miyuki Sawashiro"}, {"name": "Nobunaga Shimazaki"}, {"name": "Yoshimasa Hosoya"}, {"name": "Yuma Uchida"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 10749, "name": "Romance"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'b6e83275-6dee-4ce7-8910-2c3b5b5b165a', 'Death Note Relight 1: Visions of a God', '2007-08-31', 'A recap of Death Note episodes 1–26, with new footage. When rogue shinigami Ryuk leaves his Death Note in the human world, he has no idea how far the one who finds it will take his new-found power. With the Death Note in hand, brilliant high school student Light Yagami vows to rid the world of evil.', 1,
    1, 'Unknown Studio', 7.9, 'https://image.tmdb.org/t/p/w500/qDhbGqjZ7yFwa7FMIzuiQTQMfEQ.jpg', NULL,
    '[{"name": "Mamoru Miyano"}, {"name": "Shido Nakamura"}, {"name": "Kappei Yamaguchi"}, {"name": "Aya Hirano"}, {"name": "Naoya Uchida"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10770, "name": "TV Movie"}, {"id": 80, "name": "Crime"}, {"id": 18, "name": "Drama"}, {"id": 14, "name": "Fantasy"}, {"id": 53, "name": "Thriller"}, {"id": 16, "name": "Animation"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'd42b4aa4-ce16-4e06-8317-7544f1663baa', 'Death Note Relight 2: L''s Successors', '2009-10-07', 'A recap of Death Note episodes 27–37, with new footage. L''s successor must ponder L''s defeat if he hopes to succeed where his famed predecessor failed. At the headquarters of the SPK, he calls upon the Japanese task force to declare war on Light.', 1,
    1, 'Unknown Studio', 7.304, 'https://image.tmdb.org/t/p/w500/tgdsW1yCVbyG2E3eORz0HdAvnmR.jpg', NULL,
    '[{"name": "Mamoru Miyano"}, {"name": "Shido Nakamura"}, {"name": "Aya Hirano"}, {"name": "Noriko Hidaka"}, {"name": "Nozomu Sasaki"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10770, "name": "TV Movie"}, {"id": 53, "name": "Thriller"}, {"id": 16, "name": "Animation"}, {"id": 80, "name": "Crime"}, {"id": 18, "name": "Drama"}, {"id": 14, "name": "Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'a69224e4-2c73-4ff6-9533-81a64de6d927', 'Solo Leveling', '2024-01-07', 'They say whatever doesn''t kill you makes you stronger, but that''s not the case for the world''s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that''s leveling him up in every way. Now, he''s inspired to discover the secrets behind his powers and the dungeon that spawned them.', 1,
    1, 'Unknown Studio', 8.6, 'https://image.tmdb.org/t/p/w500/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg', NULL,
    '[{"name": "Taito Ban"}, {"name": "Genta Nakamura"}, {"name": "Haruna Mikawa"}, {"name": "Reina Ueda"}, {"name": "Daisuke Hirakawa"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'e17ebe16-4c2d-4478-9e09-9994b2b7e3b7', 'Doraemon', '2005-04-22', 'Robotic cat Doraemon is sent back in time from the 22nd century to protect 10-year-old Noby, a lazy and uncoordinated boy who is destined to have a tragic future. Doraemon can create secret gadgets from a pocket on his stomach, but they usually cause more bad than good because of Noby''s propensity to misuse them.', 1,
    1, 'Unknown Studio', 7.979, 'https://image.tmdb.org/t/p/w500/9ZN1P32SHviL3SV51qLivxycvcx.jpg', NULL,
    '[{"name": "Megumi Oohara"}, {"name": "Wasabi Mizuta"}, {"name": "Yumi Kakazu"}, {"name": "Tomokazu Seki"}, {"name": "Subaru Kimura"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10759, "name": "Action & Adventure"}, {"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}, {"id": 10762, "name": "Kids"}, {"id": 10751, "name": "Family"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '6c92dbba-6a71-43ea-b790-f76cdcd27211', 'Ninja Boy Rantaro', '1993-04-10', 'Rantarō, Shinbei and Kirimaru are ninja apprentices in the Ninja Gakuen, where first grade ones are called "Nintamas". They must learn everything a ninja must know, but as for our heroes, money, food or playing are more interesting. The series show the everyday adventures of our heroes.', 1,
    1, 'Unknown Studio', 6.2, 'https://image.tmdb.org/t/p/w500/xdnt8Dx5Z8Ad78GfqSSsk9kv4tB.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 35, "name": "Comedy"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10762, "name": "Kids"}, {"id": 16, "name": "Animation"}, {"id": 10751, "name": "Family"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '821fbc2f-1265-483a-a56c-b05677bab102', 'Ninja Hattori-kun', '1981-09-28', '11-year-old Kenichi Mitsuba is an average kid who goes to secondary school and struggles with his studies, he is very stubborn and is very lazy and therefore always ends up frustrating his parents and teacher. He loves to find an easy way of things. He befriends Hattori Kanzo, a ninja from the Iga Clan, and he becomes part of the Mitsuba family along with his brother, Shinzo and his ninja dog, Shishimaru. Hattori helps Kenichi with his problems, and constantly keeps an eye on him, as a good friend. The main antagonist Kemumaki, a Koga ninja and his ninja cat, Kagechiyo always troubles Kenichi, mainly because of their feud over one girl, Yumeko. Kenichi asks Hattori to take revenge as a recurring storyline in many episodes. Although Hattori is a good friend, Kenichi sometimes fights with Hattori due to misunderstandings created by Kemumaki. Sometimes Jippou, Togejirou and Tsubame help him.', 1,
    1, 'Unknown Studio', 6.833, 'https://image.tmdb.org/t/p/w500/zVSx7lXxRKqXiQMgN6QNGgNyF5R.jpg', NULL,
    '[{"name": "Kenichi Ogata"}, {"name": "Kaneta Kimotsuki"}, {"name": "Yuko Mita"}, {"name": "Masako Sugaya"}, {"name": "Runa Akiyama"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 35, "name": "Comedy"}, {"id": 10751, "name": "Family"}, {"id": 10762, "name": "Kids"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '229f6107-14e3-4180-8386-6c2c5de19d02', 'My Family', '2002-04-19', 'A light hearted comedy based on the about the daily life of a "normal" Japanese family. The Tachibana family consists of a housewife mom, a salary-man dad, and teenager Mikan and Yuzuhiko.', 1,
    1, 'Unknown Studio', 8.75, 'https://image.tmdb.org/t/p/w500/yzXniZFkPjpfroSSQoG4aCCKT7B.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'fbb7a252-4306-44f1-848f-0ff1998e5fe4', 'KochiKame', '1996-06-16', 'Ryoutsu, being an underpayed policeman, is always coming up with ways to make some quick money. But in the end, his plans which are ridiculous from the beginning always go wrong and land him in big trouble.', 1,
    1, 'Unknown Studio', 7.9, 'https://image.tmdb.org/t/p/w500/ujltFuzCZ9FLe07kTRLZ2gpIJVY.jpg', NULL,
    '[{"name": "Haruki Sayama"}, {"name": "Yuko Doi"}, {"name": "Shigeru Ushiyama"}, {"name": "Yumi Morio"}, {"name": "Maya Okamoto"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 80, "name": "Crime"}, {"id": 10751, "name": "Family"}, {"id": 10759, "name": "Action & Adventure"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '7d9cca97-ac7f-4db4-b747-505ef1d3f9d2', 'MegaMan NT Warrior', '2002-03-04', 'In the year 20XX, a young boy named Netto Hikari receives a very special gift as he enters the 5th grade: his very own customized Net Navi, Rockman.', 1,
    1, 'Unknown Studio', 7.825, 'https://image.tmdb.org/t/p/w500/roZllkX4mOoDAKljFtpYJzD41Kn.jpg', NULL,
    '[{"name": "Kumiko Higa"}, {"name": "Akiko Kimura"}, {"name": "Yuji Ueda"}, {"name": "Kaori Mizuhashi"}, {"name": "Masako Jō"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10759, "name": "Action & Adventure"}, {"id": 16, "name": "Animation"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '80c1688c-5e22-43b2-9a89-46ea77e9220b', 'Hunter × Hunter', '1999-10-16', 'Gon Freecss discovers that the father he had always been told was dead was actually alive the whole time. Ging is a famous Hunter: an individual who has proven themself an elite member of humanity. Gon becomes determined to follow in his father''s footsteps, pass the rigorous Hunter Examination.', 1,
    1, 'Unknown Studio', 8.5, 'https://image.tmdb.org/t/p/w500/eobAuhCJA8oRp814V67WhezVXtQ.jpg', NULL,
    '[{"name": "Junko Takeuchi"}, {"name": "Kanako Mitsuhashi"}, {"name": "Yuki Kaida"}, {"name": "Hozumi Goda"}, {"name": "Hiroki Takahashi"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10765, "name": "Sci-Fi & Fantasy"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 18, "name": "Drama"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'e42ea936-2d60-434e-bbc4-d712c4074347', 'Inazuma Eleven', '2008-10-05', 'Mamoru Endou is a cheerful goalkeeper in Raimon Jr High, with six other players in the team. But there was a day when the team was almost lead to disbandment by Natsumi unless they are able to win the match against the Teikoku Gakuen, currently the best team in Japan. He tried to save the club by gathering four more players to join the team.', 1,
    1, 'Unknown Studio', 8.0, 'https://image.tmdb.org/t/p/w500/blocZH67QzA1CDbBq6Ik5ftCOXP.jpg', NULL,
    '[{"name": "Yuka Terasaki"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '6937b669-7c02-47cf-9901-0212ef070ab4', 'Please Put Them On, Takamine-san', '2025-04-02', 'Student council president Takane Takamine is a popular star student. On the other hand, Koushi Shirota doesn''t have many friends. That all changes when Koushi accidentally discovers Takane''s ability to go back in time and alter past actions just by changing her lingerie. After some pestering, Koushi agrees to help Takane and be her closet, by having spare lingerie on hand.', 1,
    1, 'Unknown Studio', 8.0, 'https://image.tmdb.org/t/p/w500/qUgFbHmIEyFNX0rzL4UgJfHkqcS.jpg', NULL,
    '[{"name": "Yurika Kubo"}, {"name": "Daisuke Kasuya"}, {"name": "Sumire Uesaka"}, {"name": "Miyu Tomita"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '8011e6bd-7285-4403-a698-e4e4629bf142', 'Aquarion', '2005-04-05', 'Set in the future, a giant fighting machine called the Aquarion is humanity''s only effective weapon in the fight against the technologically advanced species called the Shadow Angels.', 1,
    1, 'Unknown Studio', 6.8, 'https://image.tmdb.org/t/p/w500/b7nYCiRLElXOcSICrZ8jdBqQP1m.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10759, "name": "Action & Adventure"}, {"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'e718f728-a8d7-4679-9af6-81be9d946f3b', 'Hell Girl', '2005-10-04', 'A supernatural system allows people to take revenge by having other people sent to Hell via the services of a mysterious entity and her assistants who implement this system. Revenge, injustice, hatred, and the nature of human emotions are common themes throughout the series.', 1,
    1, 'Unknown Studio', 8.2, 'https://image.tmdb.org/t/p/w500/l50Wjrt2m362DjsKZVTpU2sp5L5.jpg', NULL,
    '[{"name": "Masaya Matsukaze"}, {"name": "Mamiko Noto"}, {"name": "Takayuki Sugo"}, {"name": "Takako Honda"}, {"name": "Kana Sakai"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 9648, "name": "Mystery"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'aa2a7bcd-37a3-42bd-9802-0f93828085d5', 'Hamtaro', '2000-07-07', 'The cute and cuddly pet of 10-year-old Laura, Hamtaro is a small hamster with a big sense of adventure! Join Hamtaro and the adorable rodent rascals who captured the hearts of millions of children the world over.', 1,
    1, 'Unknown Studio', 7.9, 'https://image.tmdb.org/t/p/w500/heeMIthcPavUaNJJl0YPARva2ua.jpg', NULL,
    '[{"name": "Kurumi Mamiya"}, {"name": "Haruna Ikezawa"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10762, "name": "Kids"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'e3daf0e7-0c0d-482c-b160-0e31440f1e31', 'Chihayafuru', '2011-10-05', 'Chihaya Ayase has spent most of her life supporting her sister''s model career. When she meets a boy named Arata Wataya, he thinks Chihaya has potential to become a great karuta player. As Chihaya dreams of becoming Japan''s best karuta player, she is soon separated from her karuta playing friends. Now in high school, Chihaya still plays karuta in the hope that she will one day meet her friends again.', 1,
    1, 'Unknown Studio', 7.7, 'https://image.tmdb.org/t/p/w500/x1yYnCaK8gLnLgQSnd9IGoapHbx.jpg', NULL,
    '[{"name": "Asami Seto"}, {"name": "Mamoru Miyano"}, {"name": "Yoshimasa Hosoya"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'd03571a9-4c61-4646-a915-f9c72b1ab982', 'Candy Candy', '1976-10-01', 'This story is about a girl, Candy, who is a orphan. She is a nice and optimistic girl and she has a warm heart. When she was a child, she lived in an orphanage called Pony''s Home. She had a good friend called Ann. And she met the "handsome boy on the hill" who is a important person in her life, on the hill behind the orphanage. She was adopted by the Loka''s family. What''s awaiting her are the bad-hearted Leo and his sister, Eliza. One day, in the rose garden, she met a boy, who is identical to the "handsome boy on the hill" who she had met in her childhood. The boy is called Antony. Thereafter, a fantastic story that she has never expected begins.', 1,
    1, 'Unknown Studio', 8.5, 'https://image.tmdb.org/t/p/w500/fBidRE6eaO41CqApwkpXyj9v9hi.jpg', NULL,
    '[{"name": "Minori Matsushima"}, {"name": "Makio Inoue"}, {"name": "Kei Tomiyama"}, {"name": "Kazuhiko Inoue"}, {"name": "Kaneta Kimotsuki"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 10762, "name": "Kids"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '0703b4f1-f14a-464b-8dab-6d42ac58c9de', 'Natsume''s Book of Friends', '2008-07-08', 'Natsume Takashi has the ability to see spirits, which he has long kept secret. However, once he inherits a strange book that belonged to his deceased grandmother, Reiko, he discovers the reason why spirits surround him.', 1,
    1, 'Unknown Studio', 8.1, 'https://image.tmdb.org/t/p/w500/c4B2NFHFH0N8W7ovMsxiGIj7Fgp.jpg', NULL,
    '[{"name": "Hiroshi Kamiya"}, {"name": "Kazuhiko Inoue"}, {"name": "Eiji Itoh"}, {"name": "Miki Ito"}, {"name": "Hisayoshi Suganuma"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 9648, "name": "Mystery"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'd7207846-fbb5-4f52-be81-2a77d8ad0cd2', 'Yu Yu Hakusho', '1992-10-10', 'One day, 14-year-old Yusuke Urameshi suddenly finds himself dead, having died pushing a child out of the way of oncoming traffic. Since he has such a bad personality, even the Spirit World was caught by surprise that he would sacrifice himself. Yusuke soon finds out he wasn''t supposed to die and has a chance for resurrection and bringing his body back to life. After being resurrected, Yusuke becomes a Spirit Detective, along with his comrades, and one adventure after another happens, whether it be an investigation or a fighting tournament.', 1,
    1, 'Unknown Studio', 8.5, 'https://image.tmdb.org/t/p/w500/5OnjguJwkujo3R23w95EEX8eAEN.jpg', NULL,
    '[{"name": "Nozomu Sasaki"}, {"name": "Shigeru Chiba"}, {"name": "Megumi Ogata"}, {"name": "Nobuyuki Hiyama"}, {"name": "Yuri Amano"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '9123d233-3d92-470b-8974-c810cccc4327', 'Chibi Maruko-chan', '1990-01-07', 'Meet Maruko, a sweet schoolgirl with a hefty dose of curiosity (and occasional laziness!). She sails through life in a cozy town alongside her loving parents, grandparents, and sister. Maruko has a band of loyal friends, including her closest pal, Tama-chan, but her playful and doting grandpa is at the heart of it all. Life is never dull in this charming series.', 1,
    1, 'Unknown Studio', 7.8, 'https://image.tmdb.org/t/p/w500/r82VxNSbsIkgukLjjSlQ9wx77jj.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '39f59f00-19ce-469b-8068-6ae38c6548b9', 'Beast King GoLion', '1981-03-04', 'Long ago, a powerful sentient robot known as GoLion, abused his great powers by attacking and killing creatures known as Deathblack Beastmen, boasting that no one could defeat him. For his arrogance, The Goddess of the Universe punished GoLion by separating him into 5 different lion robots. In the year 1999, a group of 5 young men returned to Earth after a space voyage, only to find it ravaged by nuclear war. After encountering the alien race known as the Galra, the 5 youths end up on the planet Altea and learn that the 5 lion robots that GoLion was split into are in hibernation in various parts of Altea. Somehow, they must reunite the lions and form GoLion, the only hope for the human race.', 1,
    1, 'Unknown Studio', 7.4, 'https://image.tmdb.org/t/p/w500/q2SY3q7ECRGxbAKLyrD0IvVAPIv.jpg', NULL,
    '[{"name": "Kazuhiko Inoue"}, {"name": "Yu Mizushima"}, {"name": "Masako Nozawa"}, {"name": "Ryusei Nakao"}, {"name": "Rumiko Ukai"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'ec333dbd-d976-44a0-8e8f-70530af0ef7e', 'UniteUp!', '2023-01-07', 'Akira Kiyose, a high schooler who loves to sing, gets recruited by a talent agency called sMiLea Production. Akira learns that the legendary idols “Anela”, who shocked the world with their sudden retirement, are behind the agency developing talent. Together with Banri Naoe and Chihiro Isuzugawa, also recruited by the agency, they form an idol group as they chase their dream towards super stardom alongside other idol groups “LEGIT” and “JAXX/JAXX”.', 1,
    1, 'Unknown Studio', 5.2, 'https://image.tmdb.org/t/p/w500/hTmTMf5MyQbizGGfcY6dkYJcAwP.jpg', NULL,
    '[{"name": "Kikunosuke Toya"}, {"name": "Ryotaro Yamaguchi"}, {"name": "Amon Hirai"}, {"name": "Magura Sukegawa"}, {"name": "masa"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}]'::json
);
INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '6937b669-7c02-47cf-9901-0212ef070ab4', 'Please Put Them On, Takamine-san', '2025-04-02', 'Student council president Takane Takamine is a popular star student. On the other hand, Koushi Shirota doesn''t have many friends. That all changes when Koushi accidentally discovers Takane''s ability to go back in time and alter past actions just by changing her lingerie. After some pestering, Koushi agrees to help Takane and be her closet, by having spare lingerie on hand.', 1,
    1, 'Unknown Studio', 8.0, 'https://image.tmdb.org/t/p/w500/qUgFbHmIEyFNX0rzL4UgJfHkqcS.jpg', NULL,
    '[{"name": "Yurika Kubo"}, {"name": "Daisuke Kasuya"}, {"name": "Sumire Uesaka"}, {"name": "Miyu Tomita"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '8011e6bd-7285-4403-a698-e4e4629bf142', 'Aquarion', '2005-04-05', 'Set in the future, a giant fighting machine called the Aquarion is humanity''s only effective weapon in the fight against the technologically advanced species called the Shadow Angels.', 1,
    1, 'Unknown Studio', 6.8, 'https://image.tmdb.org/t/p/w500/b7nYCiRLElXOcSICrZ8jdBqQP1m.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 10759, "name": "Action & Adventure"}, {"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'e718f728-a8d7-4679-9af6-81be9d946f3b', 'Hell Girl', '2005-10-04', 'A supernatural system allows people to take revenge by having other people sent to Hell via the services of a mysterious entity and her assistants who implement this system. Revenge, injustice, hatred, and the nature of human emotions are common themes throughout the series.', 1,
    1, 'Unknown Studio', 8.2, 'https://image.tmdb.org/t/p/w500/l50Wjrt2m362DjsKZVTpU2sp5L5.jpg', NULL,
    '[{"name": "Masaya Matsukaze"}, {"name": "Mamiko Noto"}, {"name": "Takayuki Sugo"}, {"name": "Takako Honda"}, {"name": "Kana Sakai"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 9648, "name": "Mystery"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'aa2a7bcd-37a3-42bd-9802-0f93828085d5', 'Hamtaro', '2000-07-07', 'The cute and cuddly pet of 10-year-old Laura, Hamtaro is a small hamster with a big sense of adventure! Join Hamtaro and the adorable rodent rascals who captured the hearts of millions of children the world over.', 1,
    1, 'Unknown Studio', 7.9, 'https://image.tmdb.org/t/p/w500/heeMIthcPavUaNJJl0YPARva2ua.jpg', NULL,
    '[{"name": "Kurumi Mamiya"}, {"name": "Haruna Ikezawa"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10762, "name": "Kids"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'e3daf0e7-0c0d-482c-b160-0e31440f1e31', 'Chihayafuru', '2011-10-05', 'Chihaya Ayase has spent most of her life supporting her sister''s model career. When she meets a boy named Arata Wataya, he thinks Chihaya has potential to become a great karuta player. As Chihaya dreams of becoming Japan''s best karuta player, she is soon separated from her karuta playing friends. Now in high school, Chihaya still plays karuta in the hope that she will one day meet her friends again.', 1,
    1, 'Unknown Studio', 7.7, 'https://image.tmdb.org/t/p/w500/x1yYnCaK8gLnLgQSnd9IGoapHbx.jpg', NULL,
    '[{"name": "Asami Seto"}, {"name": "Mamoru Miyano"}, {"name": "Yoshimasa Hosoya"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'd03571a9-4c61-4646-a915-f9c72b1ab982', 'Candy Candy', '1976-10-01', 'This story is about a girl, Candy, who is an orphan. She is a nice and optimistic girl and she has a warm heart. When she was a child, she lived in an orphanage called Pony''s Home. She had a good friend called Ann. And she met the "handsome boy on the hill" who is an important person in her life, on the hill behind the orphanage. She was adopted by the Loka''s family. What''s awaiting her are the bad-hearted Leo and his sister, Eliza. One day, in the rose garden, she met a boy, who is identical to the "handsome boy on the hill" who she had met in her childhood. The boy is called Antony. Thereafter, a fantastic story that she has never expected begins.', 1,
    1, 'Unknown Studio', 8.5, 'https://image.tmdb.org/t/p/w500/fBidRE6eaO41CqApwkpXyj9v9hi.jpg', NULL,
    '[{"name": "Minori Matsushima"}, {"name": "Makio Inoue"}, {"name": "Kei Tomiyama"}, {"name": "Kazuhiko Inoue"}, {"name": "Kaneta Kimotsuki"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 18, "name": "Drama"}, {"id": 10762, "name": "Kids"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '0703b4f1-f14a-464b-8dab-6d42ac58c9de', 'Natsume''s Book of Friends', '2008-07-08', 'Natsume Takashi has the ability to see spirits, which he has long kept secret. However, once he inherits a strange book that belonged to his deceased grandmother, Reiko, he discovers the reason why spirits surround him.', 1,
    1, 'Unknown Studio', 8.1, 'https://image.tmdb.org/t/p/w500/c4B2NFHFH0N8W7ovMsxiGIj7Fgp.jpg', NULL,
    '[{"name": "Hiroshi Kamiya"}, {"name": "Kazuhiko Inoue"}, {"name": "Eiji Itoh"}, {"name": "Miki Ito"}, {"name": "Hisayoshi Suganuma"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}, {"id": 9648, "name": "Mystery"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'd7207846-fbb5-4f52-be81-2a77d8ad0cd2', 'Yu Yu Hakusho', '1992-10-10', 'One day, 14-year-old Yusuke Urameshi suddenly finds himself dead, having died pushing a child out of the way of oncoming traffic. Since he has such a bad personality, even the Spirit World was caught by surprise that he would sacrifice himself. Yusuke soon finds out he wasn''t supposed to die and has a chance for resurrection and bringing his body back to life. After being resurrected, Yusuke becomes a Spirit Detective, along with his comrades, and one adventure after another happens, whether it be an investigation or a fighting tournament.', 1,
    1, 'Unknown Studio', 8.5, 'https://image.tmdb.org/t/p/w500/5OnjguJwkujo3R23w95EEX8eAEN.jpg', NULL,
    '[{"name": "Nozomu Sasaki"}, {"name": "Shigeru Chiba"}, {"name": "Megumi Ogata"}, {"name": "Nobuyuki Hiyama"}, {"name": "Yuri Amano"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '9123d233-3d92-470b-8974-c810cccc4327', 'Chibi Maruko-chan', '1990-01-07', 'Meet Maruko, a sweet schoolgirl with a hefty dose of curiosity (and occasional laziness!). She sails through life in a cozy town alongside her loving parents, grandparents, and sister. Maruko has a band of loyal friends, including her closest pal, Tama-chan, but her playful and doting grandpa is at the heart of it all. Life is never dull in this charming series.', 1,
    1, 'Unknown Studio', 7.8, 'https://image.tmdb.org/t/p/w500/r82VxNSbsIkgukLjjSlQ9wx77jj.jpg', NULL,
    '[]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 35, "name": "Comedy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    '39f59f00-19ce-469b-8068-6ae38c6548b9', 'Beast King GoLion', '1981-03-04', 'Long ago, a powerful sentient robot known as GoLion, abused his great powers by attacking and killing creatures known as Deathblack Beastmen, boasting that no one could defeat him. For his arrogance, The Goddess of the Universe punished GoLion by separating him into 5 different lion robots. In the year 1999, a group of 5 young men returned to Earth after a space voyage, only to find it ravaged by nuclear war. After encountering the alien race known as the Galra, the 5 youths end up on the planet Altea and learn that the 5 lion robots that GoLion was split into are in hibernation in various parts of Altea. Somehow, they must reunite the lions and form GoLion, the only hope for the human race.', 1,
    1, 'Unknown Studio', 7.4, 'https://image.tmdb.org/t/p/w500/q2SY3q7ECRGxbAKLyrD0IvVAPIv.jpg', NULL,
    '[{"name": "Kazuhiko Inoue"}, {"name": "Yu Mizushima"}, {"name": "Masako Nozawa"}, {"name": "Ryusei Nakao"}, {"name": "Rumiko Ukai"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}, {"id": 10759, "name": "Action & Adventure"}, {"id": 10765, "name": "Sci-Fi & Fantasy"}]'::json
);

INSERT INTO Animes (
    AnimeID, Title, ReleaseDate, Description, NoOfEpisodes, NoOfSeasons,
    Studio, AverageRating, CoverImage, Subtitles, Actors, Languages, Genres
) VALUES (
    'ec333dbd-d976-44a0-8e8f-70530af0ef7e', 'UniteUp!', '2023-01-07', 'Akira Kiyose, a high schooler who loves to sing, gets recruited by a talent agency called sMiLea Production. Akira learns that the legendary idols “Anela”, who shocked the world with their sudden retirement, are behind the agency developing talent. Together with Banri Naoe and Chihiro Isuzugawa, also recruited by the agency, they form an idol group as they chase their dream towards super stardom alongside other idol groups “LEGIT” and “JAXX/JAXX”.', 1,
    1, 'Unknown Studio', 5.2, 'https://image.tmdb.org/t/p/w500/hTmTMf5MyQbizGGfcY6dkYJcAwP.jpg', NULL,
    '[{"name": "Kikunosuke Toya"}, {"name": "Ryotaro Yamaguchi"}, {"name": "Amon Hirai"}, {"name": "Magura Sukegawa"}, {"name": "masa"}]'::json,
    '[{"english_name": "Japanese", "iso_639_1": "ja", "name": "日本語"}]'::json,
    '[{"id": 16, "name": "Animation"}]'::json
);
INSERT INTO Users VALUES
('USR0000001', 'anime_lover', 'anime_lover@example.com', 'hash_password_1', 'Just a casual anime fan!', 'profile1.jpg', '2022-01-15', '2025-03-21 14:30:45'),
('USR0000002', 'otaku_master', 'otaku_master@example.com', 'hash_password_2', 'Dedicated to watching everything.', 'profile2.jpg', '2022-02-20', '2025-03-22 08:15:30'),
('USR0000003', 'manga_reader', 'manga_reader@example.com', 'hash_password_3', 'I read the manga before watching the anime.', 'profile3.jpg', '2022-03-10', '2025-03-20 18:45:22'),
('USR0000004', 'seasonal_watcher', 'seasonal@example.com', 'hash_password_4', 'I only watch the current season''s anime.', 'profile4.jpg', '2022-04-05', '2025-03-19 21:10:33'),
('USR0000005', 'action_seeker', 'action@example.com', 'hash_password_5', 'Looking for the best action scenes!', 'profile5.jpg', '2022-05-12', '2025-03-18 16:20:15'),
('USR0000006', 'slice_of_lifer', 'slice@example.com', 'hash_password_6', 'Slice of life is the best genre.', 'profile6.jpg', '2022-06-18', '2025-03-17 11:05:48'),
('USR0000007', 'anime_critic', 'critic@example.com', 'hash_password_7', 'Professional anime reviewer with 5 years of experience.', 'profile7.jpg', '2022-07-22', '2025-03-22 09:30:55'),
('USR0000008', 'mecha_fan', 'mecha@example.com', 'hash_password_8', 'Giant robots are my passion!', 'profile8.jpg', '2022-08-30', '2025-03-21 12:40:27'),
('USR0000009', 'shonen_junkie', 'shonen@example.com', 'hash_password_9', 'Can''t get enough of shonen anime.', 'profile9.jpg', '2022-09-14', '2025-03-20 19:15:36'),
('USR0000010', 'studio_ghibli', 'ghibli@example.com', 'hash_password_10', 'Studio Ghibli films changed my life.', 'profile10.jpg', '2022-10-11', '2025-03-19 17:25:18');

INSERT INTO Admins VALUES
('ADM0000001', 'admin1@animestreamingservice.com', 'admin_pass_hash_1'),
('ADM0000002', 'admin2@animestreamingservice.com', 'admin_pass_hash_2'),
('ADM0000003', 'admin3@animestreamingservice.com', 'admin_pass_hash_3'),
('ADM0000004', 'content_manager@animestreamingservice.com', 'admin_pass_hash_4'),
('ADM0000005', 'user_support@animestreamingservice.com', 'admin_pass_hash_5'),
('ADM0000006', 'technical_lead@animestreamingservice.com', 'admin_pass_hash_6'),
('ADM0000007', 'data_admin@animestreamingservice.com', 'admin_pass_hash_7'),
('ADM0000008', 'system_admin@animestreamingservice.com', 'admin_pass_hash_8'),
('ADM0000009', 'community_manager@animestreamingservice.com', 'admin_pass_hash_9'),
('ADM0000010', 'translation_team@animestreamingservice.com', 'admin_pass_hash_10');

INSERT INTO PremiumSubscription VALUES
('SUB0000001', 'USR0000001', '2024-01-15', TRUE, '2025-04-15', 9.99, 30),
('SUB0000002', 'USR0000002', '2024-02-20', TRUE, '2025-05-20', 9.99, 30),
('SUB0000003', 'USR0000003', '2024-06-10', TRUE, '2025-03-10', 9.99, 30),
('SUB0000004', 'USR0000005', '2024-04-05', TRUE, '2025-04-05', 9.99, 30),
('SUB0000005', 'USR0000006', '2024-01-12', FALSE, '2025-01-12', 9.99, 30),
('SUB0000006', 'USR0000007', '2024-12-18', TRUE, '2025-03-18', 99.99, 365),
('SUB0000007', 'USR0000008', '2024-11-22', TRUE, '2025-05-22', 24.99, 90),
('SUB0000008', 'USR0000004', '2024-08-30', FALSE, '2024-11-30', 24.99, 90),
('SUB0000009', 'USR0000009', '2024-09-14', TRUE, '2025-03-14', 9.99, 30),
('SUB0000010', 'USR0000010', '2024-10-11', TRUE, '2025-04-11', 9.99, 30);

INSERT INTO Generes VALUES
('GEN0000001', 'Action', '["ANM0000001", "ANM0000002", "ANM0000003", "ANM0000004", "ANM0000007", "ANM0000008"]'),
('GEN0000002', 'Adventure', '["ANM0000001", "ANM0000002", "ANM0000003", "ANM0000006", "ANM0000007"]'),
('GEN0000003', 'Fantasy', '["ANM0000001", "ANM0000002", "ANM0000003", "ANM0000006"]'),
('GEN0000004', 'Drama', '["ANM0000001", "ANM0000005", "ANM0000006", "ANM0000010"]'),
('GEN0000005', 'Supernatural', '["ANM0000003", "ANM0000005", "ANM0000008"]'),
('GEN0000006', 'Comedy', '["ANM0000002", "ANM0000004", "ANM0000009"]'),
('GEN0000007', 'Thriller', '["ANM0000001", "ANM0000005"]'),
('GEN0000008', 'Mystery', '["ANM0000005", "ANM0000008"]'),
('GEN0000009', 'Slice of Life', '["ANM0000009", "ANM0000010"]'),
('GEN0000010', 'Sci-Fi', '["ANM0000004", "ANM0000006"]');

INSERT INTO Seasons VALUES
('ANM0000001', 1, 25, '2013-04-07'),
('ANM0000001', 2, 12, '2017-04-01'),
('ANM0000001', 3, 22, '2018-07-23'),
('ANM0000001', 4, 16, '2020-12-07'),
('ANM0000002', 1, 13, '2016-04-03'),
('ANM0000002', 2, 25, '2017-04-01'),
('ANM0000002', 3, 25, '2018-04-07'),
('ANM0000002', 4, 25, '2019-10-12'),
('ANM0000002', 5, 25, '2021-03-27'),
('ANM0000002', 6, 13, '2024-10-05'),
('ANM0000003', 1, 26, '2019-04-06'),
('ANM0000003', 2, 11, '2021-10-10'),
('ANM0000003', 3, 7, '2023-04-09'),
('ANM0000004', 1, 12, '2015-10-05'),
('ANM0000004', 2, 12, '2019-04-09'),
('ANM0000005', 1, 37, '2006-10-03'),
('ANM0000006', 1, 64, '2009-04-05'),
('ANM0000007', 1, 220, '2002-10-03'),
('ANM0000008', 1, 24, '2020-10-03'),
('ANM0000008', 2, 10, '2023-07-06'),
('ANM0000009', 1, 25, '2022-04-09'),
('ANM0000010', 1, 13, '2018-01-11');


INSERT INTO Episodes VALUES
('ANM0000001', 1, 1, '2013-04-07', 24, 15420, 340),
('ANM0000001', 1, 2, '2013-04-14', 24, 14210, 290),
('ANM0000001', 1, 3, '2013-04-21', 24, 13850, 310),
('ANM0000001', 2, 1, '2017-04-01', 24, 18650, 410),
('ANM0000001', 2, 2, '2017-04-08', 24, 17890, 380),
('ANM0000002', 1, 1, '2016-04-03', 24, 12440, 280),
('ANM0000002', 1, 2, '2016-04-10', 24, 11980, 260),
('ANM0000002', 2, 1, '2017-04-01', 24, 13560, 310),
('ANM0000003', 1, 1, '2019-04-06', 24, 19870, 220),
('ANM0000003', 1, 2, '2019-04-13', 24, 18940, 240),
('ANM0000003', 2, 1, '2021-10-10', 24, 22450, 180),
('ANM0000004', 1, 1, '2015-10-05', 24, 16740, 320),
('ANM0000004', 1, 2, '2015-10-12', 24, 15980, 290),
('ANM0000005', 1, 1, '2006-10-03', 24, 21340, 410),
('ANM0000005', 1, 2, '2006-10-10', 24, 20780, 380),
('ANM0000006', 1, 1, '2009-04-05', 24, 18540, 260),
('ANM0000006', 1, 2, '2009-04-12', 24, 17980, 240),
('ANM0000007', 1, 1, '2002-10-03', 24, 14520, 380),
('ANM0000007', 1, 2, '2002-10-10', 24, 13980, 360),
('ANM0000008', 1, 1, '2020-10-03', 24, 17650, 240),
('ANM0000008', 1, 2, '2020-10-10', 24, 16890, 210),
('ANM0000009', 1, 1, '2022-04-09', 24, 19430, 180),
('ANM0000009', 1, 2, '2022-04-16', 24, 18760, 160),
('ANM0000010', 1, 1, '2018-01-11', 24, 15640, 220),
('ANM0000010', 1, 2, '2018-01-18', 24, 15020, 190);

INSERT INTO Reviews VALUES
('REV0000001', 'USR0000001', 'ANM0000001', 9.5, '2023-05-15 14:30:00', 'One of the best anime I have ever watched. The plot twists are mind-blowing!'),
('REV0000002', 'USR0000002', 'ANM0000001', 8.8, '2023-06-20 18:45:00', 'Amazing story and character development, but some episodes drag a bit.'),
('REV0000003', 'USR0000003', 'ANM0000002', 8.5, '2023-07-10 10:15:00', 'Great superhero anime with interesting characters and good action scenes.'),
('REV0000004', 'USR0000004', 'ANM0000003', 9.2, '2023-08-05 21:30:00', 'The animation quality is breathtaking! Story is compelling too.'),
('REV0000005', 'USR0000005', 'ANM0000004', 8.7, '2023-09-12 16:45:00', 'Hilarious and action-packed. Saitama is such a unique protagonist.'),
('REV0000006', 'USR0000006', 'ANM0000005', 9.4, '2023-10-18 12:20:00', 'A masterpiece of psychological thriller. The cat and mouse game is incredible.'),
('REV0000007', 'USR0000007', 'ANM0000006', 9.7, '2023-11-22 08:30:00', 'Perfect adaptation of the manga. Every episode is meaningful and well-executed.'),
('REV0000009', 'USR0000009', 'ANM0000008', 8.9, '2024-01-14 14:40:00', 'Great modern shonen with fantastic fight scenes and intriguing powers.'),
('REV0000010', 'USR0000010', 'ANM0000009', 8.6, '2024-02-11 11:25:00', 'Charming and funny. The family dynamics are so entertaining!'),
('REV0000011', 'USR0000001', 'ANM0000010', 9.1, '2024-03-15 17:10:00', 'Emotionally moving story with beautiful animation. Made me cry multiple times.'),
('REV0000012', 'USR0000002', 'ANM0000003', 9.0, '2024-04-20 13:50:00', 'The animation in the fight scenes is on another level!'),
('REV0000013', 'USR0000003', 'ANM0000006', 9.8, '2024-05-10 20:30:00', 'Possibly the greatest anime ever made. Perfect in every way.'),
('REV0000014', 'USR0000004', 'ANM0000009', 8.5, '2024-06-05 15:45:00', 'Such a refreshing concept. Anya steals every scene.'),
('REV0000015', 'USR0000005', 'ANM0000005', 9.5, '2024-07-12 09:20:00', 'A classic that still holds up. The mind games are so intense!');

INSERT INTO Comments_ VALUES
('CMT0000001', 'ANM0000001', 1, 1, 'USR0000001', 'That scene where the Colossal Titan appears gave me chills!', '2023-05-15 15:30:00', 45, 2),
('CMT0000002', 'ANM0000001', 1, 2, 'USR0000002', 'The ODM gear scenes are so well animated!', '2023-06-20 19:45:00', 38, 1),
('CMT0000003', 'ANM0000002', 1, 1, 'USR0000003', 'All Might is such an inspiring character!', '2023-07-10 11:15:00', 52, 3),
('CMT0000004', 'ANM0000003', 1, 1, 'USR0000004', 'The water breathing technique animation is gorgeous!', '2023-08-05 22:30:00', 67, 0),
('CMT0000005', 'ANM0000004', 1, 1, 'USR0000005', 'That punch at the end had me rolling! So anticlimactic!', '2023-09-12 17:45:00', 41, 2),
('CMT0000006', 'ANM0000005', 1, 1, 'USR0000006', 'Light''s planning is so meticulous. He thought of everything!', '2023-10-18 13:20:00', 29, 5),
('CMT0000007', 'ANM0000006', 1, 1, 'USR0000007', 'The world-building in this episode is phenomenal.', '2023-11-22 09:30:00', 35, 1),
('CMT0000008', 'ANM0000007', 1, 1, 'USR0000008', 'Naruto''s determination is what makes this show special.', '2023-12-30 20:15:00', 27, 3),
('CMT0000009', 'ANM0000008', 1, 1, 'USR0000009', 'Sukuna is such a terrifying villain!', '2024-01-14 15:40:00', 43, 0),
('CMT0000010', 'ANM0000009', 1, 1, 'USR0000010', 'Anya''s reactions are priceless! "Waku waku!"', '2024-02-11 12:25:00', 58, 1),
('CMT0000011', 'ANM0000010', 1, 1, 'USR0000001', 'The scene where Violet types the letter made me tear up.', '2024-03-15 18:10:00', 39, 2),
('CMT0000012', 'ANM0000003', 1, 2, 'USR0000002', 'Nezuko is so cute even when she''s fighting!', '2024-04-20 14:50:00', 47, 1),
('CMT0000013', 'ANM0000006', 1, 2, 'USR0000003', 'The philosopher''s stone reveal was mind-blowing!', '2024-05-10 21:30:00', 33, 0),
('CMT0000014', 'ANM0000009', 1, 2, 'USR0000004', 'Yor''s assassin skills while being drunk is hilarious!', '2024-06-05 16:45:00', 51, 2),
('CMT0000015', 'ANM0000005', 1, 2, 'USR0000005', 'L''s deduction skills are amazing. He figured out Kira so quickly!', '2024-07-12 10:20:00', 36, 3);

INSERT INTO Watchlist VALUES
('USR0000001', 'ANM0000001', '2023-01-15', 2),
('USR0000001', 'ANM0000003', '2023-02-20', 1),
('USR0000002', 'ANM0000002', '2023-02-25', 2),
('USR0000002', 'ANM0000005', '2023-03-10', 3),
('USR0000003', 'ANM0000006', '2023-03-15', 2),
('USR0000003', 'ANM0000008', '2023-04-05', 1),
('USR0000004', 'ANM0000004', '2023-04-12', 3),
('USR0000004', 'ANM0000009', '2023-05-18', 2),
('USR0000005', 'ANM0000007', '2023-05-22', 4),
('USR0000005', 'ANM0000010', '2023-06-30', 2),
('USR0000006', 'ANM0000001', '2023-07-14', 3),
('USR0000006', 'ANM0000004', '2023-08-11', 2),
('USR0000007', 'ANM0000005', '2023-09-15', 3),
('USR0000007', 'ANM0000008', '2023-10-20', 2),
('USR0000008', 'ANM0000003', '2023-11-10', 2),
('USR0000008', 'ANM0000006', '2023-12-05', 1),
('USR0000009', 'ANM0000009', '2024-01-15', 3),
('USR0000009', 'ANM0000002', '2024-02-20', 2),
('USR0000010', 'ANM0000010', '2024-03-10', 3),
('USR0000010', 'ANM0000007', '2024-03-20', 1);

INSERT INTO WatchHistory VALUES
('USR0000001', 'ANM0000001', 75, '2023-05-15 14:30:00'),
('USR0000001', 'ANM0000003', 15, '2023-08-20 18:45:00'),
('USR0000002', 'ANM0000002', 85, '2023-07-10 10:15:00'),
('USR0000002', 'ANM0000005', 100, '2023-08-05 21:30:00'),
('USR0000003', 'ANM0000006', 45, '2023-09-12 16:45:00'),
('USR0000003', 'ANM0000008', 0, '2023-10-18 12:20:00'),
('USR0000004', 'ANM0000004', 100, '2023-11-22 08:30:00'),
('USR0000004', 'ANM0000009', 60, '2023-12-30 19:15:00'),
('USR0000005', 'ANM0000007', 30, '2024-01-14 14:40:00'),
('USR0000005', 'ANM0000010', 70, '2024-02-11 11:25:00'),
('USR0000006', 'ANM0000001', 100, '2024-03-15 17:10:00'),
('USR0000006', 'ANM0000004', 50, '2024-04-20 13:50:00'),
('USR0000007', 'ANM0000005', 100, '2024-05-10 20:30:00'),
('USR0000007', 'ANM0000008', 75, '2024-06-05 15:45:00'),
('USR0000008', 'ANM0000003', 40, '2024-07-12 09:20:00'),
('USR0000008', 'ANM0000006', 10, '2024-08-18 22:15:00'),
('USR0000009', 'ANM0000009', 100, '2024-09-25 16:30:00'),
('USR0000009', 'ANM0000002', 65, '2024-10-30 14:10:00'),
('USR0000010', 'ANM0000010', 100, '2024-11-05 19:45:00'),
('USR0000010', 'ANM0000007', 5, '2024-12-12 10:30:00');


