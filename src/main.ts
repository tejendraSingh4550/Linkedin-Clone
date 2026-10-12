import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, Search, Home, Users, BriefcaseBusiness, MessageSquare, Bell, ChevronDown, Grid2X2, Plus, Image, CalendarDays, Play, FileText, MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send, Eye, Bookmark, Info, X, Globe2, Check } from 'lucide-angular';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(LucideAngularModule.pick({ Search, Home, Users, BriefcaseBusiness, MessageSquare, Bell, ChevronDown, Grid2X2, Plus, Image, CalendarDays, Play, FileText, MoreHorizontal, ThumbsUp, MessageCircle, Repeat2, Send, Eye, Bookmark, Info, X, Globe2, Check }))]
}).catch((error) => console.error(error));
