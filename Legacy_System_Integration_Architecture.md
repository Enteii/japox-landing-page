# Legacy System Integration Architecture

```html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Legacy System Integration Architecture</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #6366f1;
            --secondary: #8b5cf6;
            --accent: #ec4899;
            --dark: #1e293b;
            --light: #f1f5f9;
            --success: #10b981;
            --warning: #f59e0b;
            --error: #ef4444;
            --gradient: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0f172a;
            color: #e2e8f0;
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.95);
            backdrop-filter: blur(20px);
            z-index: 1000;
            padding: 1rem 2rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-title {
            font-size: 1.5rem;
            font-weight: 700;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .nav-menu {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-menu a {
            color: #94a3b8;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-menu a:hover {
            color: var(--primary);
        }

        .nav-menu a.active {
            color: white;
        }

        .nav-menu a.active::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--gradient);
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 4rem 2rem;
            background: radial-gradient(ellipse at top, #1e293b 0%, #0f172a 50%);
        }

        .hero-content {
            text-align: center;
            max-width: 900px;
            z-index: 2;
        }

        .hero h1 {
            font-size: clamp(2.5rem, 6vw, 5rem);
            font-weight: 800;
            margin-bottom: 1.5rem;
            background: linear-gradient(to right, #60a5fa, #c084fc, #f472b6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: fadeInUp 1s ease;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: #94a3b8;
            margin-bottom: 3rem;
            animation: fadeInUp 1s ease 0.2s both;
        }

        .hero-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
            margin-top: 4rem;
            animation: fadeInUp 1s ease 0.4s both;
        }

        .hero-card {
            background: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            padding: 2rem;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .hero-card:hover {
            transform: translateY(-5px);
            background: rgba(30, 41, 59, 0.8);
            border-color: var(--primary);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.3);
        }

        .hero-card-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        /* Sections */
        section {
            padding: 5rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .section-subtitle {
            font-size: 1.25rem;
            color: #94a3b8;
        }

        /* Architecture Diagram */
        .architecture-diagram {
            background: rgba(30, 41, 59, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.5rem;
            padding: 3rem;
            margin: 2rem 0;
            position: relative;
            overflow: hidden;
        }

        .flow-diagram {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            flex-wrap: wrap;
        }

        .flow-box {
            background: rgba(99, 102, 241, 0.1);
            border: 2px solid var(--primary);
            border-radius: 1rem;
            padding: 1.5rem;
            text-align: center;
            flex: 1;
            min-width: 200px;
            transition: all 0.3s ease;
            position: relative;
        }

        .flow-box:hover {
            transform: scale(1.05);
            background: rgba(99, 102, 241, 0.2);
            box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        .flow-arrow {
            color: var(--primary);
            font-size: 2rem;
        }

        /* Code Blocks */
        .code-container {
            background: #1e293b;
            border-radius: 1rem;
            margin: 2rem 0;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-header {
            background: rgba(99, 102, 241, 0.1);
            padding: 1rem 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .code-lang {
            color: var(--primary);
            font-weight: 600;
        }

        .code-content {
            padding: 1.5rem;
            overflow-x: auto;
        }

        pre {
            color: #e2e8f0;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 0.9rem;
            line-height: 1.5;
        }

        .keyword { color: #c084fc; }
        .string { color: #86efac; }
        .comment { color: #64748b; }
        .function { color: #60a5fa; }

        /* Features Grid */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .feature-card {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1.5rem;
            padding: 2rem;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--gradient);
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .feature-card:hover::before {
            transform: scaleX(1);
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }

        .feature-icon {
            width: 60px;
            height: 60px;
            background: var(--gradient);
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
        }

        .feature-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        .feature-description {
            color: #94a3b8;
            line-height: 1.8;
        }

        /* Timeline */
        .timeline {
            position: relative;
            padding: 2rem 0;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, transparent, var(--primary), transparent);
            transform: translateX(-50%);
        }

        .timeline-item {
            display: flex;
            margin-bottom: 4rem;
            position: relative;
        }

        .timeline-item:nth-child(even) {
            flex-direction: row-reverse;
        }

        .timeline-content {
            flex: 1;
            padding: 2rem;
            background: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            margin: 0 2rem;
            position: relative;
        }

        .timeline-marker {
            position: absolute;
            left: 50%;
            top: 2rem;
            width: 20px;
            height: 20px;
            background: var(--gradient);
            border-radius: 50%;
            transform: translateX(-50%);
            z-index: 1;
        }

        .timeline-phase {
            color: var(--primary);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .timeline-title {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        .pulse {
            animation: pulse 2s infinite;
        }

        /* Interactive Elements */
        .tab-container {
            margin: 2rem 0;
        }

        .tab-buttons {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .tab-button {
            padding: 0.75rem 1.5rem;
            background: rgba(99, 102, 241, 0.1);
            border: 2px solid transparent;
            border-radius: 0.5rem;
            color: #94a3b8;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .tab-button:hover {
            background: rgba(99, 102, 241, 0.2);
            color: white;
        }

        .tab-button.active {
            background: var(--gradient);
            color: white;
            border-color: var(--primary);
        }

        .tab-content {
            display: none;
            animation: fadeInUp 0.5s ease;
        }

        .tab-content.active {
            display: block;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .nav-menu {
                display: none;
            }

            .timeline::before {
                left: 2rem;
            }

            .timeline-item {
                flex-direction: column !important;
            }

            .timeline-marker {
                left: 2rem;
            }

            .flow-diagram {
                flex-direction: column;
            }

            .flow-arrow {
                transform: rotate(90deg);
            }
        }

        /* Scroll Reveal */
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class='nav-content'>
            <div class='nav-title'>Legacy Integration Architecture</div>
            <ul class='nav-menu'>
                <li><a href='#home' class='nav-link active'>Home</a></li>
                <li><a href='#architecture' class='nav-link'>Architecture</a></li>
                <li><a href='#implementation' class='nav-link'>Implementation</a></li>
                <li><a href='#patterns' class='nav-link'>Patterns</a></li>
                <li><a href='#roadmap' class='nav-link'>Roadmap</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id='home' class='hero'>
        <div class='hero-content'>
            <h1>Legacy System Integration</h1>
            <p class='hero-subtitle'>Seamlessly connect legacy systems with modern DDD architectures</p>
            
            <div class='hero-grid'>
                <div class='hero-card' onclick="scrollToSection('architecture')">
                    <div class='hero-card-icon'>🏗️</div>
                    <h3>Event-Driven Architecture</h3>
                    <p>Asynchronous, loosely coupled systems</p>
                </div>
                <div class='hero-card' onclick="scrollToSection('implementation')">
                    <div class='hero-card-icon'>🛡️</div>
                    <h3>Anti-Corruption Layer</h3>
                    <p>Protect domain integrity</p>
                </div>
                <div class='hero-card' onclick="scrollToSection('patterns')">
                    <div class='hero-card-icon'>⚡</div>
                    <h3>High Performance</h3>
                    <p>Batch processing & optimization</p>
                </div>
                <div class='hero-card' onclick="scrollToSection('roadmap')">
                    <div class='hero-card-icon'>🚀</div>
                    <h3>Phased Approach</h3>
                    <p>Incremental implementation</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Architecture Overview -->
    <section id='architecture' class='reveal'>
        <div class='section-header'>
            <h2 class='section-title'>Architecture Overview</h2>
            <p class='section-subtitle'>Event-driven integration with domain protection</p>
        </div>

        <div class='architecture-diagram'>
            <h3 style='text-align: center; margin-bottom: 2rem;'>High-Level Event Flow</h3>
            <div class='flow-diagram'>
                <div class='flow-box'>
                    <h4>Legacy System</h4>
                    <p>ERP, CRM, etc.</p>
                </div>
                <span class='flow-arrow'>→</span>
                <div class='flow-box'>
                    <h4>Event Publisher</h4>
                    <p>Transform & Publish</p>
                </div>
                <span class='flow-arrow'>→</span>
                <div class='flow-box pulse'>
                    <h4>Event Bus</h4>
                    <p>Message Broker</p>
                </div>
                <span class='flow-arrow'>→</span>
                <div class='flow-box'>
                    <h4>ACL</h4>
                    <p>Anti-Corruption Layer</p>
                </div>
                <span class='flow-arrow'>→</span>
                <div class='flow-box'>
                    <h4>Domain</h4>
                    <p>DDD Systems</p>
                </div>
            </div>
        </div>

        <div class='features-grid'>
            <div class='feature-card'>
                <div class='feature-icon'>🔗</div>
                <h3 class='feature-title'>Loose Coupling</h3>
                <p class='feature-description'>Systems remain independent with no direct dependencies. Changes in one system don't cascade to others.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>⏱️</div>
                <h3 class='feature-title'>Asynchronous Processing</h3>
                <p class='feature-description'>Legacy operations continue without waiting for downstream processing, ensuring high availability.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>🔒</div>
                <h3 class='feature-title'>Event Immutability</h3>
                <p class='feature-description'>Published events are never modified, providing a reliable audit trail and enabling replay.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>🔄</div>
                <h3 class='feature-title'>Idempotency</h3>
                <p class='feature-description'>Processing the same event multiple times produces identical results, ensuring reliability.</p>
            </div>
        </div>
    </section>

    <!-- Implementation Details -->
    <section id='implementation' class='reveal'>
        <div class='section-header'>
            <h2 class='section-title'>Implementation Details</h2>
            <p class='section-subtitle'>Code examples and patterns for production-ready integration</p>
        </div>

        <div class='tab-container'>
            <div class='tab-buttons'>
                <button class='tab-button active' onclick="showTab('event-structure')">Event Structure</button>
                <button class='tab-button' onclick="showTab('acl-implementation')">ACL Implementation</button>
                <button class='tab-button' onclick="showTab('event-handler')">Event Handler</button>
                <button class='tab-button' onclick="showTab('error-handling')">Error Handling</button>
            </div>

            <div id='event-structure' class='tab-content active'>
                <div class='code-container'>
                    <div class='code-header'>
                        <span class='code-lang'>TypeScript</span>
                        <span>Legacy Event Structure</span>
                    </div>
                    <div class='code-content'>
                        <pre><span class='keyword'>interface</span> <span class='function'>LegacyInventoryEvent</span> {
  <span class='comment'>// Event metadata</span>
  eventId: <span class='keyword'>string</span>;
  eventType: <span class='string'>'INVENTORY_CREATED'</span> | <span class='string'>'INVENTORY_UPDATED'</span>;
  timestamp: <span class='keyword'>Date</span>;
  source: {
    system: <span class='keyword'>string</span>;
    version: <span class='keyword'>string</span>;
  };
  
  <span class='comment'>// Payload with legacy data</span>
  payload: {
    itemCode: <span class='keyword'>string</span>;
    itemType: <span class='keyword'>string</span>;
    quantity: <span class='keyword'>number</span>;
    location: {
      warehouseCode: <span class='keyword'>string</span>;
      section: <span class='keyword'>string</span>;
    };
    attributes: Record<<span class='keyword'>string</span>, <span class='keyword'>any</span>>;
  };
}</pre>
                    </div>
                </div>
            </div>

            <div id='acl-implementation' class='tab-content'>
                <div class='code-container'>
                    <div class='code-header'>
                        <span class='code-lang'>TypeScript</span>
                        <span>Anti-Corruption Layer</span>
                    </div>
                    <div class='code-content'>
                        <pre><span class='keyword'>export class</span> <span class='function'>JapoxInventoryACL</span> {
  <span class='keyword'>async</span> <span class='function'>translateInventoryEvent</span>(event: LegacyInventoryEvent) {
    <span class='comment'>// Validate and normalize VIN</span>
    <span class='keyword'>const</span> vin = <span class='keyword'>this</span>.validateAndNormalizeVIN(event.payload.attributes.vin);
    
    <span class='comment'>// Map legacy codes to domain IDs</span>
    <span class='keyword'>const</span> dealer = <span class='keyword'>await this</span>.dealerRepository.findByLegacyCode(
      event.payload.attributes.dealerCode
    );
    
    <span class='comment'>// Convert units (miles to kilometers)</span>
    <span class='keyword'>const</span> mileageInKm = <span class='keyword'>this</span>.conversionService.milesToKilometers(
      event.payload.attributes.odometer
    );
    
    <span class='comment'>// Return clean domain command</span>
    <span class='keyword'>return</span> {
      vin,
      mileage: mileageInKm,
      dealerId: dealer.id,
      registrationType: <span class='string'>'SIMPLIFIED'</span>
    };
  }
}</pre>
                    </div>
                </div>
            </div>

            <div id='event-handler' class='tab-content'>
                <div class='code-container'>
                    <div class='code-header'>
                        <span class='code-lang'>TypeScript</span>
                        <span>Event Handler with Idempotency</span>
                    </div>
                    <div class='code-content'>
                        <pre><span class='keyword'>export class</span> <span class='function'>JapoxInventoryEventHandler</span> {
  <span class='keyword'>async</span> <span class='function'>handleInventoryEvent</span>(event: LegacyInventoryEvent) {
    <span class='comment'>// Idempotency check</span>
    <span class='keyword'>if</span> (<span class='keyword'>await this</span>.eventStore.exists(event.eventId)) {
      <span class='keyword'>return</span>; <span class='comment'>// Already processed</span>
    }
    
    <span class='comment'>// Transform through ACL</span>
    <span class='keyword'>const</span> command = <span class='keyword'>await this</span>.acl.translateInventoryEvent(event);
    
    <span class='comment'>// Execute domain logic</span>
    <span class='keyword'>const</span> vehicle = <span class='keyword'>await this</span>.registerVehicle(command);
    
    <span class='comment'>// Trigger async assessment</span>
    <span class='keyword'>await this</span>.triggerPriceAssessment(vehicle);
    
    <span class='comment'>// Mark as processed</span>
    <span class='keyword'>await this</span>.eventStore.markAsProcessed(event.eventId);
  }
}</pre>
                    </div>
                </div>
            </div>

            <div id='error-handling' class='tab-content'>
                <div class='code-container'>
                    <div class='code-header'>
                        <span class='code-lang'>TypeScript</span>
                        <span>Dead Letter Queue with Retry</span>
                    </div>
                    <div class='code-content'>
                        <pre><span class='keyword'>export class</span> <span class='function'>DeadLetterQueueManager</span> {
  <span class='keyword'>async</span> <span class='function'>retryFailedEvent</span>(dlqEntryId: <span class='keyword'>string</span>) {
    <span class='keyword'>const</span> entry = <span class='keyword'>await this</span>.dlqRepository.findById(dlqEntryId);
    
    <span class='comment'>// Check retry limit</span>
    <span class='keyword'>if</span> (entry.retryCount >= entry.maxRetries) {
      <span class='keyword'>await this</span>.markAsPermanentFailure(entry);
      <span class='keyword'>return</span>;
    }
    
    <span class='keyword'>try</span> {
      <span class='comment'>// Retry with appropriate handler</span>
      <span class='keyword'>await</span> handler.handleInventoryEvent(entry.originalEvent);
      <span class='keyword'>await this</span>.dlqRepository.delete(dlqEntryId);
    } <span class='keyword'>catch</span> (error) {
      <span class='comment'>// Exponential backoff</span>
      <span class='keyword'>const</span> delay = Math.pow(2, entry.retryCount) * 1000;
      <span class='keyword'>await this</span>.scheduleRetry(entry, delay);
    }
  }
}</pre>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Advanced Patterns -->
    <section id='patterns' class='reveal'>
        <div class='section-header'>
            <h2 class='section-title'>Advanced Patterns</h2>
            <p class='section-subtitle'>Performance optimization and scalability techniques</p>
        </div>

        <div class='features-grid'>
            <div class='feature-card'>
                <div class='feature-icon'>📦</div>
                <h3 class='feature-title'>Batch Processing</h3>
                <p class='feature-description'>Process events in batches for improved throughput. Intelligent buffering with configurable batch sizes and time limits.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>🏊</div>
                <h3 class='feature-title'>Connection Pooling</h3>
                <p class='feature-description'>Reuse database and message broker connections. Automatic health checks and connection recycling.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>💾</div>
                <h3 class='feature-title'>Smart Caching</h3>
                <p class='feature-description'>Cache frequently accessed mappings and lookups. LRU eviction with configurable TTL.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>📊</div>
                <h3 class='feature-title'>Monitoring & Metrics</h3>
                <p class='feature-description'>Real-time processing metrics and anomaly detection. Automatic alerting for failures and slowdowns.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>🔄</div>
                <h3 class='feature-title'>Circuit Breaker</h3>
                <p class='feature-description'>Prevent cascading failures with automatic circuit breaking. Graceful degradation during outages.</p>
            </div>
            <div class='feature-card'>
                <div class='feature-icon'>🎯</div>
                <h3 class='feature-title'>Event Sourcing</h3>
                <p class='feature-description'>Complete audit trail of all events. Enable replay and debugging capabilities.</p>
            </div>
        </div>
    </section>

    <!-- Implementation Roadmap -->
    <section id='roadmap' class='reveal'>
        <div class='section-header'>
            <h2 class='section-title'>Implementation Roadmap</h2>
            <p class='section-subtitle'>Phased approach for risk mitigation</p>
        </div>

        <div class='timeline'>
            <div class='timeline-item'>
                <div class='timeline-marker'></div>
                <div class='timeline-content'>
                    <div class='timeline-phase'>Phase 1 (Weeks 1-4)</div>
                    <h3 class='timeline-title'>Read-Only Integration</h3>
                    <ul>
                        <li>Implement event consumption from legacy system</li>
                        <li>Build Anti-Corruption Layer for data translation</li>
                        <li>Create domain models in DDD systems</li>
                        <li>Set up monitoring and alerting</li>
                    </ul>
                </div>
            </div>

            <div class='timeline-item'>
                <div class='timeline-marker'></div>
                <div class='timeline-content'>
                    <div class='timeline-phase'>Phase 2 (Weeks 5-8)</div>
                    <h3 class='timeline-title'>Bidirectional Sync</h3>
                    <ul>
                        <li>Implement reverse synchronization for inventory</li>
                        <li>Add conflict resolution mechanisms</li>
                        <li>Enhance error handling and recovery</li>
                        <li>Performance testing and optimization</li>
                    </ul>
                </div>
            </div>

            <div class='timeline-item'>
                <div class='timeline-marker'></div>
                <div class='timeline-content'>
                    <div class='timeline-phase'>Phase 3 (Weeks 9-12)</div>
                    <h3 class='timeline-title'>Full Integration</h3>
                    <ul>
                        <li>Enable all data types for bidirectional sync</li>
                        <li>Implement advanced features (caching, batching)</li>
                        <li>Comprehensive integration testing</li>
                        <li>Production deployment with gradual rollout</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Best Practices -->
    <section id='practices' class='reveal'>
        <div class='section-header'>
            <h2 class='section-title'>Best Practices & Pitfalls</h2>
            <p class='section-subtitle'>Learn from experience to avoid common mistakes</p>
        </div>

        <div class='architecture-diagram'>
            <h3 style='color: var(--success); margin-bottom: 2rem;'>✅ Best Practices</h3>
            <div class='features-grid' style='margin-bottom: 3rem;'>
                <div class='feature-card' style='border-color: var(--success);'>
                    <h4>Keep Events Simple</h4>
                    <p>Events should contain minimal data - just enough to trigger necessary actions</p>
                </div>
                <div class='feature-card' style='border-color: var(--success);'>
                    <h4>Version Everything</h4>
                    <p>Both events and APIs need versioning for backward compatibility</p>
                </div>
                <div class='feature-card' style='border-color: var(--success);'>
                    <h4>Monitor Continuously</h4>
                    <p>Set up comprehensive monitoring before going to production</p>
                </div>
                <div class='feature-card' style='border-color: var(--success);'>
                    <h4>Plan for Failure</h4>
                    <p>Every component should handle failures gracefully</p>
                </div>
            </div>

            <h3 style='color: var(--error); margin-bottom: 2rem;'>❌ Common Pitfalls</h3>
            <div class='features-grid'>
                <div class='feature-card' style='border-color: var(--error);'>
                    <h4>Tight Coupling</h4>
                    <p>Don't let legacy system details leak into your domain</p>
                </div>
                <div class='feature-card' style='border-color: var(--error);'>
                    <h4>Synchronous Processing</h4>
                    <p>Always prefer async to avoid blocking</p>
                </div>
                <div class='feature-card' style='border-color: var(--error);'>
                    <h4>Missing Idempotency</h4>
                    <p>Ensure events can be processed multiple times safely</p>
                </div>
                <div class='feature-card' style='border-color: var(--error);'>
                    <h4>Performance Afterthought</h4>
                    <p>Design for performance from the beginning</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Interactive Demo -->
    <section id='demo' class='reveal'>
        <div class='section-header'>
            <h2 class='section-title'>Interactive Event Flow</h2>
            <p class='section-subtitle'>See how events flow through the system</p>
        </div>

        <div class='architecture-diagram'>
            <div id='demo-container' style='text-align: center; padding: 2rem;'>
                <button onclick='startDemo()' style='padding: 1rem 2rem; background: var(--gradient); border: none; border-radius: 0.5rem; color: white; font-size: 1.1rem; cursor: pointer; margin-bottom: 2rem;'>
                    Start Event Flow Demo
                </button>
                
                <div id='demo-flow' style='display: none;'>
                    <div class='flow-diagram' style='justify-content: center;'>
                        <div class='flow-box' id='demo-legacy' style='opacity: 0.3;'>
                            <h4>Legacy ERP</h4>
                            <p id='demo-legacy-status'>Waiting...</p>
                        </div>
                        <span class='flow-arrow'>→</span>
                        <div class='flow-box' id='demo-publisher' style='opacity: 0.3;'>
                            <h4>Publisher</h4>
                            <p id='demo-publisher-status'>Waiting...</p>
                        </div>
                        <span class='flow-arrow'>→</span>
                        <div class='flow-box' id='demo-bus' style='opacity: 0.3;'>
                            <h4>Event Bus</h4>
                            <p id='demo-bus-status'>Waiting...</p>
                        </div>
                        <span class='flow-arrow'>→</span>
                        <div class='flow-box' id='demo-acl' style='opacity: 0.3;'>
                            <h4>ACL</h4>
                            <p id='demo-acl-status'>Waiting...</p>
                        </div>
                        <span class='flow-arrow'>→</span>
                        <div class='flow-box' id='demo-domain' style='opacity: 0.3;'>
                            <h4>Domain</h4>
                            <p id='demo-domain-status'>Waiting...</p>
                        </div>
                    </div>
                    
                    <div id='demo-log' style='margin-top: 2rem; text-align: left; background: rgba(30, 41, 59, 0.5); border-radius: 1rem; padding: 1.5rem; display: none;'>
                        <h4 style='margin-bottom: 1rem;'>Event Log:</h4>
                        <div id='demo-log-content' style='font-family: monospace; font-size: 0.9rem; line-height: 1.6;'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <script>
        // Smooth scrolling
        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Navigation active state
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Tab functionality
        function showTab(tabId) {
            const buttons = document.querySelectorAll('.tab-button');
            const contents = document.querySelectorAll('.tab-content');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));
            
            event.target.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }

        // Reveal on scroll
        const reveals = document.querySelectorAll('.reveal');
        
        function checkReveal() {
            reveals.forEach(element => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', checkReveal);
        checkReveal(); // Check on load

        // Interactive Demo
        async function startDemo() {
            const button = event.target;
            button.style.display = 'none';
            document.getElementById('demo-flow').style.display = 'block';
            document.getElementById('demo-log').style.display = 'block';
            
            const steps = [
                {
                    id: 'demo-legacy',
                    status: 'Generating event...',
                    log: '📤 Legacy ERP: Vehicle inventory event created
   EventID: 550e8400-e29b-41d4-a716
   Type: INVENTORY_CREATED
   ItemCode: VH2024001234'
                },
                {
                    id: 'demo-publisher',
                    status: 'Publishing...',
                    log: '
🔄 Publisher: Transforming legacy format to standard event
   Added metadata and timestamps
   Validated required fields'
                },
                {
                    id: 'demo-bus',
                    status: 'Routing...',
                    log: '
📨 Event Bus: Message received and queued
   Topic: inventory.events
   Subscribers: 2 (JAPOX, Marketing)'
                },
                {
                    id: 'demo-acl',
                    status: 'Translating...',
                    log: '
🛡️ ACL: Translating to domain language
   VIN normalized: JH4KA7650PC123456
   Odometer: 45000 miles → 72420 km
   Dealer mapped: DLR-001 → dealer-uuid-123'
                },
                {
                    id: 'demo-domain',
                    status: 'Processing...',
                    log: '
✅ Domain: Vehicle registered successfully
   Created: Vehicle aggregate
   Published: VehicleSimplifiedRegisteredEvent
   Triggered: Async price assessment'
                }
            ];
            
            const logContent = document.getElementById('demo-log-content');
            logContent.innerHTML = '';
            
            for (const step of steps) {
                const element = document.getElementById(step.id);
                element.style.opacity = '1';
                element.style.background = 'rgba(99, 102, 241, 0.2)';
                element.style.transform = 'scale(1.05)';
                document.getElementById(step.id + '-status').textContent = step.status;
                
                // Add to log with typing effect
                const lines = step.log.split('
');
                for (const line of lines) {
                    await typeText(logContent, line + '
', 20);
                }
                
                await sleep(800);
                
                element.style.transform = 'scale(1)';
                document.getElementById(step.id + '-status').textContent = 'Complete ✓';
            }
            
            // Show completion
            setTimeout(() => {
                logContent.innerHTML += '
🎉 <span style="color: var(--success);">Event processing completed successfully!</span>';
                button.style.display = 'inline-block';
                button.textContent = 'Run Demo Again';
            }, 1000);
        }
        
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        
        async function typeText(element, text, speed) {
            const chars = text.split('');
            for (const char of chars) {
                element.innerHTML += char;
                await sleep(speed);
            }
        }

        // Add some particle effects for visual appeal
        function createParticle() {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = 'var(--primary)';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.opacity = '0.6';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = '-10px';
            document.body.appendChild(particle);
            
            const duration = Math.random() * 3000 + 2000;
            particle.animate([
                { transform: 'translateY(0) scale(1)', opacity: 0.6 },
                { transform: `translateY(${window.innerHeight + 10}px) scale(0)`, opacity: 0 }
            ], {
                duration: duration,
                easing: 'linear'
            }).onfinish = () => particle.remove();
        }
        
        // Create particles occasionally
        setInterval(createParticle, 500);
    </script>
</body>
</html>
```
