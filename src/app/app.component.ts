import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, Home, Users, BriefcaseBusiness, MessageSquare, Bell, ChevronDown, Grid2X2, Plus, Image, CalendarDays, Play, FileText, MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send, Eye, Bookmark, Info, TrendingUp, X, Globe2, Check } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly currentNav = 'Home';
  readonly navItems = [
    { label: 'Home', icon: 'home' }, { label: 'My Network', icon: 'users' },
    { label: 'Jobs', icon: 'briefcase-business' }, { label: 'Messaging', icon: 'message-square' },
    { label: 'Notifications', icon: 'bell', badge: '3' }
  ];
  readonly headlines = [
    { title: 'The AI skills reshaping the workplace', readers: '18,420' },
    { title: 'Startups rethink the return to office', readers: '9,876' },
    { title: 'What’s next for clean energy jobs', readers: '7,253' },
    { title: 'The latest in cloud computing', readers: '5,641' },
    { title: 'Small businesses embrace automation', readers: '3,902' }
  ];
  readonly posts = [
    {
      id: 1, name: 'Maya Patel', initials: 'MP', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      headline: 'Product designer · Building thoughtful digital experiences', time: '2h',
      text: 'After months of iteration, our team just launched a new way to make complex data feel simple. The best part of product design is seeing a small detail make someone’s day a little easier. ✨\n\nA few things we learned along the way:',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1100&q=85', imageAlt: 'A bright, minimal creative workspace',
      likes: '248', comments: '32 comments', reactions: ['👍', '💡', '❤️'], actionLabel: 'Like'
    },
    {
      id: 2, name: 'Jordan Lee', initials: 'JL', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      headline: 'Engineering Manager at Northstar · Helping teams do their best work', time: '5h',
      text: 'A reminder for anyone leading a team: clarity is a kindness. Clear goals, thoughtful feedback, and room to experiment make all the difference.\n\nWhat’s one thing a great manager has done for you?',
      image: '', imageAlt: '', likes: '186', comments: '41 comments', reactions: ['👍', '❤️'], actionLabel: 'Like'
    },
    {
      id: 3, name: 'Alex Morgan', initials: 'AM', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
      headline: 'Founder & CEO · Making sustainability practical', time: '1d',
      text: 'Big milestone for our team: we’ve helped 100 local businesses cut their energy use this year. Grateful for the partners, customers, and very persistent teammates who made it happen. On to the next 100! 🌱',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=85', imageAlt: 'Wind turbines generating clean energy',
      likes: '512', comments: '67 comments', reactions: ['👍', '💡', '❤️'], actionLabel: 'Like'
    }
  ];
  likedPosts = new Set<number>();
  connected = false;
  showComposer = false;

  toggleLike(id: number): void {
    const next = new Set(this.likedPosts);
    next.has(id) ? next.delete(id) : next.add(id);
    this.likedPosts = next;
  }

  createPost(): void {
    this.showComposer = false;
  }
}
