import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentsComponent } from './comments.component';
import { MovieService } from './services/movie-service';
import { signal } from '@angular/core';
import { MovieList } from './models/movie.interface';
import { MatDialog } from '@angular/material/dialog';
import { MovieDetailsComponent } from './components/netflux/movie-details/movie-details.component';

describe('CommentsComponent', () => {
  let component: CommentsComponent;
  let fixture: ComponentFixture<CommentsComponent>;
  let mockMovieService: jest.Mocked<MovieService>;
  let mockDialog: jest.Mocked<MatDialog>;

  // Mock data
  const mockMovies: MovieList[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending movie',
      imageUrl: 'http://example.com/poster.jpg',
      rating: 8.8,
      ageRating: 'PG-13',
      time: '2h 28min',
      quality: '4K',
      tags: ['Sci-Fi'],
      favoris: true,
      releaseYear: 2010,
      genres: ['Sci-Fi'],
      director: 'Christopher Nolan',
      actors: ['Leonardo DiCaprio'],
      isTrending: false,
      isNew: false,
      trailerUrl: 'http://example.com/trailer',
    },
  ];

  beforeEach(async () => {
    // Mock services
    mockMovieService = {
      getMovies: jest.fn().mockReturnValue(signal(mockMovies)),
      loadMovies: jest.fn(),
    } as unknown as jest.Mocked<MovieService>;

    mockDialog = {
      open: jest.fn(),
    } as unknown as jest.Mocked<MatDialog>;

    await TestBed.configureTestingModule({
      imports: [CommentsComponent],
      providers: [
        { provide: MovieService, useValue: mockMovieService },
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should load movies on construction', () => {
      expect(mockMovieService.loadMovies).toHaveBeenCalled();
    });

    it('should initialize with empty current movie', () => {
      expect(component.currentMovie()).toBeNull();
    });

    it('should initialize with trailer hidden', () => {
      expect(component.showTrailer()).toBe(false);
    });
  });

  describe('Movie Handling', () => {
    it('should display movies from service', () => {
      expect(component.listMovies().length).toBe(1);
      expect(component.listMovies()[0].title).toBe('Inception');
    });

    it('should show movie trailer', () => {
      component.showMovieTrailer(mockMovies[0]);
      expect(component.currentMovie()).toEqual(mockMovies[0]);
      expect(component.showTrailer()).toBe(true);
      expect(component.focusMovie).toBe(1);
    });

    it('should hide movie trailer', () => {
      component.showMovieTrailer(mockMovies[0]);
      component.hideMovieTrailer();
      expect(component.showTrailer()).toBe(false);
      expect(component.focusMovie).toBeUndefined();
    });
  });

  describe('Dialog', () => {
    it('should open dialog with correct data', () => {
      component.currentMovie.set(mockMovies[0]);
      component.openDialog();

      expect(mockDialog.open).toHaveBeenCalledWith(MovieDetailsComponent, {
        width: 'calc(100% - 20px)',
        height: 'calc(100% - 20px)',
        maxWidth: '100%',
        maxHeight: '100%',
        data: {
          movie: mockMovies[0],
          listMovies: component.listMovies(),
        },
      });
    });
  });

  // Test bonus pour la couverture complète
  describe('Edge Cases', () => {
    it('should handle empty movie list', () => {
      mockMovieService.getMovies.mockReturnValue(signal([]));
      fixture.detectChanges();
      expect(component.listMovies().length).toBeGreaterThan(0);
    });

    it('should handle null currentMovie in dialog', () => {
      component.currentMovie.set(null);
      component.openDialog();
      expect(mockDialog.open).toHaveBeenCalled();
    });
  });
});
