-- Game X Supabase Database Schema

-- Games table (replaces pokix/game)
CREATE TABLE games (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    gameTitle VARCHAR(255) NOT NULL,
    gameUrl TEXT NOT NULL,
    gameImage TEXT,
    gameCategory VARCHAR(100),
    description TEXT,
    metaKeywords TEXT,
    metaUrl VARCHAR(255),
    view INTEGER DEFAULT 0,
    date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Categories table (replaces pokix/category)
CREATE TABLE categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    image VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Admin users table (for authentication)
CREATE TABLE admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_games_category ON games(gameCategory);
CREATE INDEX idx_games_date ON games(date DESC);
CREATE INDEX idx_games_views ON games(view DESC);
CREATE INDEX idx_categories_name ON categories(name);

-- Insert default categories
INSERT INTO categories (name, description, image) VALUES
('Car', 'Car racing and driving games', 'Car'),
('Action', 'Action packed adventure games', 'Action'),
('Card', 'Card strategy games', 'Card'),
('Minecraft', 'Minecraft style games', 'Minecraft'),
('Multiplayer', 'Multiplayer online games', 'Multiplayer'),
('Controller', 'Controller supported games', 'Controller'),
('Mahjong', 'Mahjong puzzle games', 'Mahjong'),
('Shooting', 'Shooting action games', 'Shooting'),
('Sports', 'Various sports games', 'Sports'),
('Soccer', 'Football and soccer games', 'Soccer');

-- Insert a default admin user (password: admin123)
-- Note: In production, use proper password hashing
INSERT INTO admin_users (username, password_hash) VALUES
('admin', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi');

-- Create RLS (Row Level Security) policies
ALTER TABLE games ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Allow read access to everyone for games and categories
CREATE POLICY "Allow read access on games" ON games FOR SELECT USING (true);
CREATE POLICY "Allow read access on categories" ON categories FOR SELECT USING (true);

-- Restrict admin operations (you'll need to implement proper auth)
CREATE POLICY "Allow admin write on games" ON games FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin write on categories" ON categories FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow admin access on admin_users" ON admin_users FOR ALL USING (auth.role() = 'authenticated');

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_games_updated_at BEFORE UPDATE ON games
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();