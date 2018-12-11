import { TestBed, inject } from '@angular/core/testing';

import { SpellsService } from './spells.service';
import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { HttpClientModule } from '@angular/common/http';



describe('SpellsService', () => {
  let service: SpellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SpellsService]
    });
  });

  it('should use SellsService', () => {
    service = TestBed.get(SpellsService);
    expect(service.getSpells()).toBeTruthy();
  });

  it('should be created', inject([SpellsService], (service: SpellsService) => {
    service = TestBed.get(SpellsService);
    expect(service).toBeTruthy();
  }));

});
