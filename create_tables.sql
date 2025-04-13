-- Enable UUID Extension for Auto-Generated IDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: Animes
CREATE TABLE Animes (
    AnimeID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Title VARCHAR(255) NOT NULL,
    ReleaseDate DATE NOT NULL,
    Description TEXT,
    NoOfEpisodes INT NOT NULL,
    NoOfSeasons INT NOT NULL,
    Studio VARCHAR(255),
    AverageRating FLOAT CHECK (AverageRating BETWEEN 0 AND 10),
    CoverImage VARCHAR(255),
    Subtitles JSON,
    Actors JSON,
    Languages JSON NOT NULL,
    Genres JSON NOT NULL
);

-- Table: Users
-- Table: Users
CREATE TABLE Users (
    UserID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    UserName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    Bio TEXT,
    ProfilePicture VARCHAR(255),
    JoinDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    LastLogin TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Role VARCHAR(255) NOT NULL DEFAULT 'user'
);


-- Table: Admins
CREATE TABLE Admins (
    AdminID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Email VARCHAR(255) NOT NULL UNIQUE,
    PassKey VARCHAR(255) NOT NULL
);

-- Table: PremiumSubscription
CREATE TABLE PremiumSubscription (
    SubscriptionID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    UserID UUID NOT NULL,
    SubscriptionDate DATE DEFAULT CURRENT_DATE,
    IsActive BOOLEAN NOT NULL DEFAULT TRUE,
    NextPaymentDate DATE NOT NULL,
    Price FLOAT NOT NULL CHECK (Price >= 0),
    Duration INT NOT NULL CHECK (Duration > 0),
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table: Genres
CREATE TABLE Genres (
    GenreID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    Name VARCHAR(255) NOT NULL UNIQUE,
    Animes JSON
);

-- Table: Seasons
CREATE TABLE Seasons (
    SeasonID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    AnimeID UUID NOT NULL,
    SeasonNumber INT NOT NULL,
    TotalEpisodes INT NOT NULL CHECK (TotalEpisodes > 0),
    ReleaseDate DATE,
    FOREIGN KEY (AnimeID) REFERENCES Animes(AnimeID) ON DELETE CASCADE
);

-- Table: Episodes
CREATE TABLE Episodes (
    EpisodeID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    AnimeID UUID NOT NULL,
    SeasonID UUID NOT NULL,
    EpisodeNumber INT NOT NULL CHECK (EpisodeNumber > 0),
    ReleaseDate DATE,
    Duration INT NOT NULL CHECK (Duration > 0),
    NoOfLikes INT DEFAULT 0 CHECK (NoOfLikes >= 0),
    NoOfDislikes INT DEFAULT 0 CHECK (NoOfDislikes >= 0),
    FOREIGN KEY (AnimeID) REFERENCES Animes(AnimeID) ON DELETE CASCADE,
    FOREIGN KEY (SeasonID) REFERENCES Seasons(SeasonID) ON DELETE CASCADE
);

-- Table: Reviews
CREATE TABLE Reviews (
    ReviewID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    UserID UUID NOT NULL,
    AnimeID UUID NOT NULL,
    Rating FLOAT NOT NULL CHECK (Rating BETWEEN 0 AND 10),
    TimeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ReviewText TEXT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (AnimeID) REFERENCES Animes(AnimeID) ON DELETE CASCADE
);

-- Table: Comments
CREATE TABLE Comments (
    CommentID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    AnimeID UUID NOT NULL,
    SeasonID UUID NOT NULL,
    EpisodeID UUID NOT NULL,
    UserID UUID NOT NULL,
    CommentText TEXT NOT NULL,
    TimeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    NoOfLikes INT DEFAULT 0 CHECK (NoOfLikes >= 0),
    NoOfDislikes INT DEFAULT 0 CHECK (NoOfDislikes >= 0),
    FOREIGN KEY (AnimeID) REFERENCES Animes(AnimeID) ON DELETE CASCADE,
    FOREIGN KEY (SeasonID) REFERENCES Seasons(SeasonID) ON DELETE CASCADE,
    FOREIGN KEY (EpisodeID) REFERENCES Episodes(EpisodeID) ON DELETE CASCADE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Table: Watchlist
CREATE TABLE Watchlist (
    WatchlistID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    UserID UUID NOT NULL,
    AnimeID UUID NOT NULL,
    AddedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status INT NOT NULL CHECK (Status BETWEEN 0 AND 2),
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (AnimeID) REFERENCES Animes(AnimeID) ON DELETE CASCADE
);

-- Table: WatchHistory
CREATE TABLE WatchHistory (
    WatchHistoryID UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    UserID UUID NOT NULL,
    AnimeID UUID NOT NULL,
    Seasonnumber INT NOT NULL,
    Episodenumber INT NOT NULL,
    Progress INT NOT NULL CHECK (Progress >= 0),
    LastWatchTimeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (AnimeID) REFERENCES Animes(AnimeID) ON DELETE CASCADE
);

